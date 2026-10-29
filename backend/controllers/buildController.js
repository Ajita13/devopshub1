const prisma = require("../config/db");
const { emitToUser } = require("../sockets/socketManager");

async function getBuilds(req, res, next) {
  try {
    const { status, search, pipelineId, page = 1, limit = 20 } = req.query;
    const skip = (parseInt(page) - 1) * parseInt(limit);
    const take = parseInt(limit);

    const where = {
      userId: req.user.id,
      ...(status && status !== "All" && { status }),
      ...(pipelineId && { pipelineId }),
      ...(search && {
        OR: [
          { pipelineName: { contains: search } },
          { branch: { contains: search } },
          { commitHash: { contains: search } },
          { commitMessage: { contains: search } },
        ],
      }),
    };

    const [total, builds] = await Promise.all([
      prisma.build.count({ where }),
      prisma.build.findMany({
        where,
        orderBy: { createdAt: "desc" },
        skip,
        take,
      }),
    ]);

    return res.json({
      success: true,
      builds,
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

async function getBuild(req, res, next) {
  try {
    const { id } = req.params;

    const build = await prisma.build.findFirst({
      where: {
        id,
        userId: req.user.id,
      },
    });

    if (!build) {
      return res.status(404).json({
        success: false,
        message: "Build not found",
      });
    }

    return res.json({
      success: true,
      build,
    });
  } catch (error) {
    next(error);
  }
}

async function cancelBuild(req, res, next) {
  try {
    const { id } = req.params;

    const build = await prisma.build.findFirst({
      where: { id, userId: req.user.id },
    });

    if (!build) {
      return res.status(404).json({
        success: false,
        message: "Build not found",
      });
    }

    if (build.status !== "RUNNING" && build.status !== "PENDING") {
      return res.status(400).json({
        success: false,
        message: "Only pending or running builds can be cancelled",
      });
    }

    const updated = await prisma.build.update({
      where: { id },
      data: {
        status: "FAILED",
        logs: (build.logs || "") + `\n[${new Date().toISOString()}] Build cancelled by user.\n`,
      },
    });

    if (build.pipelineId) {
      await prisma.pipeline.update({
        where: { id: build.pipelineId },
        data: { status: "FAILED" },
      });
    }

    emitToUser(req.user.id, "build:updated", updated);

    return res.json({
      success: true,
      message: "Build cancelled",
      build: updated,
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getBuilds,
  getBuild,
  cancelBuild,
};
