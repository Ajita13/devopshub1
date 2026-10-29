const prisma = require("../config/db");
const { emitToUser } = require("../sockets/socketManager");

async function getLogs(req, res, next) {
  try {
    const { level, service, search, limit = 50, page = 1 } = req.query;
    const take = parseInt(limit);
    const skip = (parseInt(page) - 1) * take;

    const where = {
      userId: req.user.id,
      ...(level && level !== "ALL" && { level }),
      ...(service && service !== "ALL" && { service }),
      ...(search && {
        OR: [
          { message: { contains: search } },
          { service: { contains: search } },
          { level: { contains: search } },
        ],
      }),
    };

    const [total, logs] = await Promise.all([
      prisma.systemLog.count({ where }),
      prisma.systemLog.findMany({
        where,
        orderBy: { createdAt: "desc" },
        skip,
        take,
      }),
    ]);

    return res.json({
      success: true,
      logs,
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

async function createLog(req, res, next) {
  try {
    const { level = "INFO", service = "CI/CD Service", message } = req.body;

    if (!message) {
      return res.status(400).json({
        success: false,
        message: "Log message is required",
      });
    }

    const log = await prisma.systemLog.create({
      data: {
        level,
        service,
        message,
        userId: req.user.id,
      },
    });

    emitToUser(req.user.id, "log:new", log);

    return res.status(201).json({
      success: true,
      log,
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getLogs,
  createLog,
};
