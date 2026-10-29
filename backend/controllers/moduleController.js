const prisma = require("../config/db");
const { emitToUser } = require("../sockets/socketManager");

async function getModuleData(req, res, next) {
  try {
    const { type } = req.params;
    const userId = req.user.id;

    switch (type) {
      case "environments": {
        const items = await prisma.environmentConfig.findMany({
          where: { userId },
          orderBy: { createdAt: "desc" },
        });
        return res.json({
          success: true,
          items: items.map((i) => [i.name, i.branch, i.status, i.uptime]),
          raw: items,
        });
      }

      case "releases": {
        const items = await prisma.releaseRecord.findMany({
          where: { userId },
          orderBy: { createdAt: "desc" },
        });
        return res.json({
          success: true,
          items: items.map((i) => [i.version, i.environment, i.status, new Date(i.createdAt).toLocaleDateString()]),
          raw: items,
        });
      }

      case "triggers": {
        const items = await prisma.triggerItem.findMany({
          where: { userId },
          orderBy: { createdAt: "desc" },
        });
        return res.json({
          success: true,
          items: items.map((i) => [i.name, i.branch, i.status, i.source]),
          raw: items,
        });
      }

      case "webhooks": {
        const items = await prisma.webhookItem.findMany({
          where: { userId },
          orderBy: { createdAt: "desc" },
        });
        return res.json({
          success: true,
          items: items.map((i) => [i.name, i.connectionStatus, i.state, i.provider]),
          raw: items,
        });
      }

      case "services": {
        const items = await prisma.serviceItem.findMany({
          where: { userId },
          orderBy: { createdAt: "desc" },
        });
        return res.json({
          success: true,
          items: items.map((i) => [i.name, i.category, i.status, i.health]),
          raw: items,
        });
      }

      case "secrets": {
        const items = await prisma.projectSecret.findMany({
          where: { userId },
          orderBy: { createdAt: "desc" },
        });
        return res.json({
          success: true,
          items: items.map((i) => [i.key, i.environment, i.status, new Date(i.updatedAt).toLocaleDateString()]),
          raw: items,
        });
      }

      case "audit": {
        const items = await prisma.activityLog.findMany({
          where: { userId },
          orderBy: { createdAt: "desc" },
          take: 50,
        });
        return res.json({
          success: true,
          items: items.map((i) => [i.userName, i.title, i.type, new Date(i.createdAt).toLocaleTimeString()]),
          raw: items,
        });
      }

      case "templates": {
        const pipelines = await prisma.pipeline.findMany({
          where: { userId },
          orderBy: { createdAt: "desc" },
        });
        return res.json({
          success: true,
          items: pipelines.map((p) => [p.name, p.environment, p.status, new Date(p.createdAt).toLocaleDateString()]),
          raw: pipelines,
        });
      }

      case "team": {
        const users = await prisma.user.findMany({
          select: { id: true, name: true, email: true, role: true, isActive: true },
        });
        return res.json({
          success: true,
          items: users.map((u) => [u.name, u.email, u.role.toUpperCase(), u.isActive ? "Active" : "Inactive"]),
          raw: users,
        });
      }

      default: {
        return res.json({
          success: true,
          items: [],
          raw: [],
        });
      }
    }
  } catch (error) {
    next(error);
  }
}

async function createModuleItem(req, res, next) {
  try {
    const { type } = req.params;
    const userId = req.user.id;
    const body = req.body;

    let created;

    switch (type) {
      case "environments": {
        created = await prisma.environmentConfig.create({
          data: {
            name: body.name || "Staging Environment",
            branch: body.branch || "develop",
            status: body.status || "Healthy",
            uptime: "99.9%",
            userId,
          },
        });
        break;
      }

      case "releases": {
        created = await prisma.releaseRecord.create({
          data: {
            version: body.version || `v1.${Date.now().toString().slice(-2)}.0`,
            environment: body.environment || "Production",
            status: body.status || "Success",
            userId,
          },
        });
        break;
      }

      case "triggers": {
        created = await prisma.triggerItem.create({
          data: {
            name: body.name || "Push Trigger",
            branch: body.branch || "main",
            status: "Active",
            source: body.source || "GitHub",
            userId,
          },
        });
        break;
      }

      case "webhooks": {
        created = await prisma.webhookItem.create({
          data: {
            name: body.name || "Webhook Integration",
            connectionStatus: "Connected",
            state: "Active",
            provider: body.provider || "GitHub",
            userId,
          },
        });
        break;
      }

      case "services": {
        created = await prisma.serviceItem.create({
          data: {
            name: body.name || "API Service",
            category: body.category || "Backend",
            status: "Connected",
            health: "Healthy",
            uptime: "99.9%",
            userId,
          },
        });
        break;
      }

      case "secrets": {
        created = await prisma.projectSecret.create({
          data: {
            key: body.key || "NEW_SECRET_KEY",
            environment: body.environment || "Production",
            status: "Protected",
            userId,
          },
        });
        break;
      }

      default:
        return res.status(400).json({
          success: false,
          message: `Unknown module type: ${type}`,
        });
    }

    emitToUser(userId, "module:updated", { type });

    return res.status(201).json({
      success: true,
      message: `${type} item created successfully`,
      item: created,
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getModuleData,
  createModuleItem,
};
