const prisma = require("../config/db");
const { emitToUser } = require("../sockets/socketManager");

async function getPipelines(req, res, next) {
  try {
    const { search, status, page = 1, limit = 20 } = req.query;
    const skip = (parseInt(page) - 1) * parseInt(limit);
    const take = parseInt(limit);

    const where = {
      userId: req.user.id,
      ...(status && status !== "All" && { status }),
      ...(search && {
        OR: [
          { name: { contains: search } },
          { repository: { contains: search } },
          { branch: { contains: search } },
        ],
      }),
    };

    const [total, pipelines] = await Promise.all([
      prisma.pipeline.count({ where }),
      prisma.pipeline.findMany({
        where,
        orderBy: { createdAt: "desc" },
        skip,
        take,
        include: {
          _count: { select: { builds: true } },
        },
      }),
    ]);

    return res.json({
      success: true,
      pipelines,
      pagination: {
        total,
        page: parseInt(page),
        limit: take,
        totalPages: Math.ceil(total / take) || 1,
      },
    });
  } catch (error) {
    next(error);
  }
}

async function getPipeline(req, res, next) {
  try {
    const { id } = req.params;

    const pipeline = await prisma.pipeline.findFirst({
      where: {
        id,
        userId: req.user.id,
      },
      include: {
        builds: {
          orderBy: { createdAt: "desc" },
          take: 10,
        },
      },
    });

    if (!pipeline) {
      return res.status(404).json({
        success: false,
        message: "Pipeline not found",
      });
    }

    return res.json({
      success: true,
      pipeline,
    });
  } catch (error) {
    next(error);
  }
}

async function createPipeline(req, res, next) {
  try {
    const { name, repository, branch = "main", environment = "Development" } = req.body;

    const pipeline = await prisma.pipeline.create({
      data: {
        name: name.trim(),
        repository: repository ? repository.trim() : `github.com/${req.user.name.toLowerCase().replace(/\s+/g, "-")}/${name.toLowerCase().replace(/\s+/g, "-")}`,
        branch: branch.trim(),
        environment,
        status: "IDLE",
        userId: req.user.id,
      },
    });

    // Record activity
    const activity = await prisma.activityLog.create({
      data: {
        title: `Pipeline created: ${pipeline.name}`,
        type: "code",
        userName: req.user.name,
        details: `Repository: ${pipeline.repository} on ${pipeline.branch}`,
        userId: req.user.id,
      },
    });

    // Real-time broadcast to user's room
    emitToUser(req.user.id, "pipeline:created", pipeline);
    emitToUser(req.user.id, "activity:new", activity);

    return res.status(201).json({
      success: true,
      message: "Pipeline created successfully",
      pipeline,
    });
  } catch (error) {
    next(error);
  }
}

async function updatePipeline(req, res, next) {
  try {
    const { id } = req.params;
    const { name, repository, branch, environment, status } = req.body;

    const existing = await prisma.pipeline.findFirst({
      where: { id, userId: req.user.id },
    });

    if (!existing) {
      return res.status(404).json({
        success: false,
        message: "Pipeline not found",
      });
    }

    const updated = await prisma.pipeline.update({
      where: { id },
      data: {
        ...(name && { name: name.trim() }),
        ...(repository && { repository: repository.trim() }),
        ...(branch && { branch: branch.trim() }),
        ...(environment && { environment }),
        ...(status && { status }),
      },
    });

    emitToUser(req.user.id, "pipeline:updated", updated);

    return res.json({
      success: true,
      message: "Pipeline updated successfully",
      pipeline: updated,
    });
  } catch (error) {
    next(error);
  }
}

async function deletePipeline(req, res, next) {
  try {
    const { id } = req.params;

    const existing = await prisma.pipeline.findFirst({
      where: { id, userId: req.user.id },
    });

    if (!existing) {
      return res.status(404).json({
        success: false,
        message: "Pipeline not found",
      });
    }

    await prisma.pipeline.delete({
      where: { id },
    });

    emitToUser(req.user.id, "pipeline:deleted", { id });

    return res.json({
      success: true,
      message: "Pipeline deleted successfully",
    });
  } catch (error) {
    next(error);
  }
}

async function runPipeline(req, res, next) {
  try {
    const { id } = req.params;

    const pipeline = await prisma.pipeline.findFirst({
      where: { id, userId: req.user.id },
    });

    if (!pipeline) {
      return res.status(404).json({
        success: false,
        message: "Pipeline not found",
      });
    }

    // Determine next build number for this user
    const latestBuild = await prisma.build.findFirst({
      where: { userId: req.user.id },
      orderBy: { buildNumber: "desc" },
    });
    const nextBuildNumber = (latestBuild ? latestBuild.buildNumber : 1000) + 1;

    // Generate simulated commit hash
    const commitHash = Math.random().toString(16).substring(2, 9);

    // Update pipeline status to RUNNING
    const updatedPipeline = await prisma.pipeline.update({
      where: { id: pipeline.id },
      data: {
        status: "RUNNING",
        lastRunAt: new Date(),
      },
    });

    // Create active build
    const build = await prisma.build.create({
      data: {
        buildNumber: nextBuildNumber,
        pipelineId: pipeline.id,
        pipelineName: pipeline.name,
        branch: pipeline.branch,
        commitHash,
        commitMessage: `Triggered execution for ${pipeline.name}`,
        status: "RUNNING",
        triggeredBy: req.user.name,
        duration: "In progress",
        durationSeconds: 0,
        logs: `[${new Date().toISOString()}] Pipeline triggered by ${req.user.name}\n[${new Date().toISOString()}] Initializing build agent...\n`,
        userId: req.user.id,
      },
    });

    // Real-time broadcast
    emitToUser(req.user.id, "pipeline:updated", updatedPipeline);
    emitToUser(req.user.id, "build:created", build);

    // Asynchronously advance pipeline execution steps in background
    simulatePipelineExecution(pipeline, build, req.user);

    return res.status(202).json({
      success: true,
      message: "Pipeline run initiated",
      pipeline: updatedPipeline,
      build,
    });
  } catch (error) {
    next(error);
  }
}

/**
 * Executes a simulated CI/CD pipeline pipeline step-by-step
 * and pushes real-time events through Socket.IO to the user's room.
 */
function simulatePipelineExecution(pipeline, build, user) {
  const steps = [
    { delay: 1500, log: "Cloning repository: " + pipeline.repository + " (" + pipeline.branch + ")" },
    { delay: 3000, log: "Dependencies installed successfully (npm install)" },
    { delay: 4500, log: "Compiling code and generating production bundles..." },
    { delay: 6000, log: "Executing unit and integration tests (24/24 passing)..." },
    { delay: 7500, log: "Running security and vulnerability scanner... 0 vulnerabilities found." },
    { delay: 9000, log: "Packaging container image and artifacts..." },
    { delay: 10500, log: "Deploying to target environment: " + pipeline.environment + "..." },
  ];

  let currentStep = 0;
  let fullLogs = build.logs || "";

  const interval = setInterval(async () => {
    if (currentStep < steps.length) {
      const step = steps[currentStep];
      const timeStr = new Date().toISOString();
      const logLine = `[${timeStr}] ${step.log}\n`;
      fullLogs += logLine;

      emitToUser(user.id, "build:log", {
        buildId: build.id,
        log: logLine,
      });

      currentStep++;
    } else {
      clearInterval(interval);

      const finalStatus = "SUCCESS";
      const durationSeconds = 11;
      const durationFormatted = "11s";

      try {
        const completedBuild = await prisma.build.update({
          where: { id: build.id },
          data: {
            status: finalStatus,
            duration: durationFormatted,
            durationSeconds,
            logs: fullLogs + `[${new Date().toISOString()}] Pipeline finished with status ${finalStatus}.\n`,
          },
        });

        const finishedPipeline = await prisma.pipeline.update({
          where: { id: pipeline.id },
          data: { status: finalStatus },
        });

        // Create deployment record
        const deployment = await prisma.deployment.create({
          data: {
            name: `${pipeline.name} Deployment`,
            environment: pipeline.environment || "Production",
            branch: pipeline.branch,
            status: "SUCCESS",
            deployedBy: user.name,
            duration: durationFormatted,
            durationSeconds,
            pipelineId: pipeline.id,
            userId: user.id,
          },
        });

        // Create activity record
        const activity = await prisma.activityLog.create({
          data: {
            title: `Build #${build.buildNumber} deployed to ${deployment.environment}`,
            type: "deploy",
            userName: user.name,
            details: `Pipeline: ${pipeline.name} | Status: Success`,
            userId: user.id,
          },
        });

        // Real-time notifications
        emitToUser(user.id, "build:updated", completedBuild);
        emitToUser(user.id, "pipeline:updated", finishedPipeline);
        emitToUser(user.id, "deployment:created", deployment);
        emitToUser(user.id, "activity:new", activity);
        emitToUser(user.id, "stats:refresh", { timestamp: Date.now() });
      } catch (err) {
        console.error("Pipeline simulation error:", err);
      }
    }
  }, 600);
}

module.exports = {
  getPipelines,
  getPipeline,
  createPipeline,
  updatePipeline,
  deletePipeline,
  runPipeline,
};
