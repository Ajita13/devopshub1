const prisma = require("../config/db");
const { emitToUser } = require("../sockets/socketManager");

async function getModuleData(req, res, next) {
  try {
    const { type } = req.params;
    const userId = req.user.id;

    switch (type) {
      case "environments": {
        let items = await prisma.environmentConfig.findMany({
          where: { userId },
          orderBy: { createdAt: "desc" },
        });

        if (items.length === 0) {
          await prisma.environmentConfig.createMany({
            data: [
              { name: "Production Environment", branch: "main", status: "Healthy", uptime: "99.98%", userId },
              { name: "Staging Environment", branch: "develop", status: "Healthy", uptime: "99.95%", userId },
              { name: "Development Sandboxes", branch: "feature/*", status: "Healthy", uptime: "99.85%", userId },
            ],
          });
          items = await prisma.environmentConfig.findMany({
            where: { userId },
            orderBy: { createdAt: "desc" },
          });
        }

        return res.json({
          success: true,
          headers: ["Environment", "Branch", "Status", "Uptime & Metrics"],
          items: items.map((i) => [i.name, i.branch, i.status, i.uptime]),
          raw: items,
        });
      }

      case "releases": {
        let items = await prisma.releaseRecord.findMany({
          where: { userId },
          orderBy: { createdAt: "desc" },
        });

        if (items.length === 0) {
          await prisma.releaseRecord.createMany({
            data: [
              { version: "v1.2.0-stable", environment: "Production", status: "Success", userId },
              { version: "v1.1.4-hotfix", environment: "Production", status: "Success", userId },
              { version: "v1.1.0", environment: "Staging", status: "Success", userId },
              { version: "v1.0.0", environment: "Production", status: "Success", userId },
            ],
          });
          items = await prisma.releaseRecord.findMany({
            where: { userId },
            orderBy: { createdAt: "desc" },
          });
        }

        return res.json({
          success: true,
          headers: ["Version Tag", "Target Environment", "Status", "Release Date"],
          items: items.map((i) => [i.version, i.environment, i.status, new Date(i.createdAt).toLocaleDateString()]),
          raw: items,
        });
      }

      case "triggers": {
        let items = await prisma.triggerItem.findMany({
          where: { userId },
          orderBy: { createdAt: "desc" },
        });

        if (items.length === 0) {
          await prisma.triggerItem.createMany({
            data: [
              { name: "GitHub Push to main", branch: "main", status: "Active", source: "GitHub Webhook", userId },
              { name: "Nightly Automated Regression", branch: "develop", status: "Scheduled", source: "Cron (00:00 UTC)", userId },
              { name: "Pull Request Validation", branch: "feature/*", status: "Active", source: "GitHub PR Hook", userId },
              { name: "Release Tag Auto-Deploy", branch: "v*.*.*", status: "Active", source: "Git Tag Event", userId },
            ],
          });
          items = await prisma.triggerItem.findMany({
            where: { userId },
            orderBy: { createdAt: "desc" },
          });
        }

        return res.json({
          success: true,
          headers: ["Trigger Name", "Branch Pattern", "Status", "Trigger Source"],
          items: items.map((i) => [i.name, i.branch, i.status, i.source]),
          raw: items,
        });
      }

      case "webhooks": {
        let items = await prisma.webhookItem.findMany({
          where: { userId },
          orderBy: { createdAt: "desc" },
        });

        if (items.length === 0) {
          await prisma.webhookItem.createMany({
            data: [
              { name: "GitHub Repository Hook", connectionStatus: "Connected", state: "Active", provider: "GitHub", userId },
              { name: "Docker Hub Image Push", connectionStatus: "Connected", state: "Active", provider: "Docker Hub", userId },
              { name: "Slack #devops-alerts Hook", connectionStatus: "Connected", state: "Active", provider: "Slack", userId },
              { name: "Discord Build Telemetry", connectionStatus: "Connected", state: "Active", provider: "Discord", userId },
            ],
          });
          items = await prisma.webhookItem.findMany({
            where: { userId },
            orderBy: { createdAt: "desc" },
          });
        }

        return res.json({
          success: true,
          headers: ["Webhook Name", "Connection", "State", "Integration Provider"],
          items: items.map((i) => [i.name, i.connectionStatus, i.state, i.provider]),
          raw: items,
        });
      }

      case "services": {
        let items = await prisma.serviceItem.findMany({
          where: { userId },
          orderBy: { createdAt: "desc" },
        });

        if (items.length === 0) {
          await prisma.serviceItem.createMany({
            data: [
              { name: "API Gateway Service", category: "Backend API", status: "Connected", health: "Healthy (12ms)", uptime: "99.99%", userId },
              { name: "Auth & Identity Service", category: "Microservice", status: "Connected", health: "Healthy (8ms)", uptime: "99.98%", userId },
              { name: "PostgreSQL Primary Cluster", category: "Database", status: "Connected", health: "Healthy (Pool 24/50)", uptime: "99.95%", userId },
              { name: "Redis In-Memory Cache", category: "Cache / Queue", status: "Connected", health: "Healthy (1.2GB)", uptime: "100%", userId },
              { name: "Background Worker Queue", category: "Async Processing", status: "Connected", health: "Healthy (12 jobs/min)", uptime: "99.90%", userId },
            ],
          });
          items = await prisma.serviceItem.findMany({
            where: { userId },
            orderBy: { createdAt: "desc" },
          });
        }

        return res.json({
          success: true,
          headers: ["Service Name", "Category", "Status", "Health & Telemetry"],
          items: items.map((i) => [i.name, i.category, i.status, i.health]),
          raw: items,
        });
      }

      case "secrets": {
        let items = await prisma.projectSecret.findMany({
          where: { userId },
          orderBy: { createdAt: "desc" },
        });

        if (items.length === 0) {
          await prisma.projectSecret.createMany({
            data: [
              { key: "DATABASE_URL", environment: "Production", status: "Protected (AES-256)", userId },
              { key: "JWT_ACCESS_SECRET", environment: "All Environments", status: "Protected (AES-256)", userId },
              { key: "AWS_ACCESS_KEY_ID", environment: "Production", status: "Protected (AES-256)", userId },
              { key: "DOCKER_AUTH_TOKEN", environment: "CI/CD Pipeline", status: "Protected (AES-256)", userId },
              { key: "SLACK_WEBHOOK_URL", environment: "Alerting", status: "Protected (AES-256)", userId },
            ],
          });
          items = await prisma.projectSecret.findMany({
            where: { userId },
            orderBy: { createdAt: "desc" },
          });
        }

        return res.json({
          success: true,
          headers: ["Secret Key", "Target Scope", "Encryption Status", "Last Modified"],
          items: items.map((i) => [i.key, i.environment, i.status, new Date(i.updatedAt).toLocaleDateString()]),
          raw: items,
        });
      }

      case "docker": {
        return res.json({
          success: true,
          headers: ["Repository Image", "Registry Provider", "Security Scan", "Image Details"],
          items: [
            ["devopshub/api-gateway:latest", "Docker Hub", "Verified", "Size: 142MB | 0 Vulnerabilities"],
            ["devopshub/auth-service:v2.1", "Docker Hub", "Verified", "Size: 98MB | 0 Vulnerabilities"],
            ["devopshub/frontend-app:1.0.4", "AWS ECR", "Verified", "Size: 64MB | 0 Vulnerabilities"],
            ["devopshub/worker-service:v1.9", "Docker Hub", "Verified", "Size: 118MB | 0 Vulnerabilities"],
          ],
        });
      }

      case "alerts": {
        const sysLogs = await prisma.systemLog.findMany({
          where: { userId },
          orderBy: { createdAt: "desc" },
          take: 5,
        });

        const defaultAlerts = [
          ["Production Deployment Completed", "INFO", "Resolved", "Deployment succeeded with 0 errors"],
          ["Worker Node 2 CPU Spike", "WARN", "Active", "CPU utilization exceeded 82%"],
          ["Automated TLS Certificate Renewed", "INFO", "Resolved", "Let's Encrypt TLS cert active for *.devopshub.io"],
          ["Docker Image Security Scan", "SUCCESS", "Resolved", "0 critical / 0 high vulnerabilities found"],
        ];

        return res.json({
          success: true,
          headers: ["Alert Title", "Severity Level", "State", "Description / Details"],
          items: defaultAlerts,
        });
      }

      case "permissions": {
        return res.json({
          success: true,
          headers: ["Role Name", "Scope", "Status", "Assigned Privileges"],
          items: [
            ["Admin (Superuser)", "Full Workspace", "Active", "manage:all, deploy:prod, edit:secrets, rbac:write"],
            ["DevOps Engineer", "CI/CD & Pipelines", "Active", "run:pipeline, deploy:staging, view:logs, create:webhook"],
            ["Developer", "Source Code & Builds", "Active", "trigger:build, create:branch, view:metrics"],
            ["Compliance Officer", "Audit & Logs", "Active", "read:audit, read:compliance, read:secrets"],
          ],
        });
      }

      case "integrations": {
        return res.json({
          success: true,
          headers: ["Integration Service", "Category", "Status", "Connection Details"],
          items: [
            ["GitHub Enterprise", "Source Control", "Connected", "Repository sync active (@devopshub)"],
            ["Docker Hub Registry", "Container Registry", "Connected", "Automated container push enabled"],
            ["AWS Cloud Infrastructure", "Cloud Provider", "Connected", "Region: us-east-1 (ECS, ECR, S3)"],
            ["Slack Notification Bot", "Team Chat", "Connected", "Target Channel: #devops-deployments"],
            ["SonarQube Security SAST", "Code Quality", "Connected", "Quality Gate: PASSED (Grade A)"],
          ],
        });
      }

      case "general": {
        return res.json({
          success: true,
          headers: ["Configuration Option", "Category", "Status", "Setting Value"],
          items: [
            ["Automated Build Retry", "CI/CD Execution", "Enabled", "Max 2 automatic retries on network timeout"],
            ["Concurrent Pipeline Jobs", "Worker Pool", "Configured", "Up to 8 parallel job runners"],
            ["Artifact Retention Policy", "Storage Management", "Configured", "Retain build artifacts for 30 days"],
            ["WebSocket Real-Time Sync", "Live Networking", "Active", "Heartbeat: 1000ms low-latency sync"],
            ["Strict Audit Logging", "Security & Compliance", "Enabled", "Immutable log records retained for 1 year"],
          ],
        });
      }

      case "insights": {
        return res.json({
          success: true,
          headers: ["DORA Metric", "Industry Benchmark", "Current Level", "Measured Value"],
          items: [
            ["Deployment Frequency", "DORA Elite", "Elite", "4.2 production deployments / day"],
            ["Lead Time for Changes", "DORA Elite", "High", "< 3.5 hours from commit to production"],
            ["Mean Time to Recovery (MTTR)", "DORA Elite", "Elite", "< 12 minutes automated rollback"],
            ["Change Failure Rate", "DORA Elite", "Elite", "< 1.8% rollback / incident rate"],
          ],
        });
      }

      case "templates": {
        return res.json({
          success: true,
          headers: ["Pipeline Template", "Type", "Status", "Workflow Stages"],
          items: [
            ["Node.js Microservice CI/CD", "Full-Stack Template", "Verified", "Lint → Test → Docker Build → Push"],
            ["Python FastAPI Microservice", "Backend Template", "Verified", "Flake8 → PyTest → Build Image → K8s Deploy"],
            ["React Frontend Pipeline", "Web Application", "Verified", "Build → Test → CloudFront S3 Sync"],
            ["Go Distributed Worker", "Microservice Template", "Verified", "Go Test → Multi-stage Docker → Helm Deploy"],
          ],
        });
      }

      case "team": {
        const users = await prisma.user.findMany({
          select: { id: true, name: true, email: true, role: true, isActive: true },
        });
        return res.json({
          success: true,
          headers: ["Team Member", "Email Address", "Role", "Account Status"],
          items: users.map((u) => [u.name, u.email, u.role.toUpperCase(), u.isActive ? "Active" : "Inactive"]),
          raw: users,
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
          headers: ["Actor", "Activity Title", "Type", "Timestamp"],
          items: items.map((i) => [i.userName, i.title, i.type, new Date(i.createdAt).toLocaleTimeString()]),
          raw: items,
        });
      }

      default: {
        return res.json({
          success: true,
          headers: ["Name", "Category", "Status", "Details"],
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
            status: "Protected (AES-256)",
            userId,
          },
        });
        break;
      }

      default: {
        created = {
          id: Date.now().toString(),
          name: body.name || "Custom Item",
          type,
          createdAt: new Date(),
        };
      }
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
