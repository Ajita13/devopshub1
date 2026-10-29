const prisma = require("../config/db");
const { emitToUser } = require("../sockets/socketManager");

async function getDeployments(req, res, next) {
  try {
    const { environment, status, search, page = 1, limit = 20 } = req.query;
    const skip = (parseInt(page) - 1) * parseInt(limit);
    const take = parseInt(limit);

    const where = {
      userId: req.user.id,
      ...(environment && environment !== "All" && { environment }),
      ...(status && status !== "All" && { status }),
      ...(search && {
        OR: [
          { name: { contains: search } },
          { branch: { contains: search } },
          { environment: { contains: search } },
        ],
      }),
    };

    const [total, deployments] = await Promise.all([
      prisma.deployment.count({ where }),
      prisma.deployment.findMany({
        where,
        orderBy: { createdAt: "desc" },
        skip,
        take,
      }),
    ]);

    return res.json({
      success: true,
      deployments,
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

async function getDeployment(req, res, next) {
  try {
    const { id } = req.params;

    const deployment = await prisma.deployment.findFirst({
      where: {
        id,
        userId: req.user.id,
      },
    });

    if (!deployment) {
      return res.status(404).json({
        success: false,
        message: "Deployment not found",
      });
    }

    return res.json({
      success: true,
      deployment,
    });
  } catch (error) {
    next(error);
  }
}

async function createDeployment(req, res, next) {
  try {
    const {
      name = "Manual Deployment",
      environment = "Production",
      branch = "main",
      status = "SUCCESS",
    } = req.body;

    const durationSeconds = Math.floor(Math.random() * 45) + 30; // 30-75s
    const minutes = Math.floor(durationSeconds / 60);
    const seconds = durationSeconds % 60;
    const duration = minutes > 0 ? `${minutes}m ${seconds}s` : `${seconds}s`;

    const deployment = await prisma.deployment.create({
      data: {
        name: name.trim(),
        environment,
        branch: branch.trim(),
        status,
        deployedBy: req.user.name,
        duration,
        durationSeconds,
        userId: req.user.id,
      },
    });

    const activity = await prisma.activityLog.create({
      data: {
        title: `Deployed to ${deployment.environment}`,
        type: "deploy",
        userName: req.user.name,
        details: `${deployment.name} on branch ${deployment.branch}`,
        userId: req.user.id,
      },
    });

    emitToUser(req.user.id, "deployment:created", deployment);
    emitToUser(req.user.id, "activity:new", activity);
    emitToUser(req.user.id, "stats:refresh", { timestamp: Date.now() });

    return res.status(201).json({
      success: true,
      message: "Deployment completed successfully",
      deployment,
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getDeployments,
  getDeployment,
  createDeployment,
};
