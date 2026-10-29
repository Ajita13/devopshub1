const http = require("http");
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
const rateLimit = require("express-rate-limit");
const dotenv = require("dotenv");

dotenv.config();

const { initSocket } = require("./sockets/socketManager");
const errorHandler = require("./middleware/errorHandler");

// Route imports
const authRoutes = require("./routes/authRoutes");
const pipelineRoutes = require("./routes/pipelineRoutes");
const buildRoutes = require("./routes/buildRoutes");
const deploymentRoutes = require("./routes/deploymentRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");
const analyticsRoutes = require("./routes/analyticsRoutes");
const logRoutes = require("./routes/logRoutes");
const moduleRoutes = require("./routes/moduleRoutes");
const healthRoutes = require("./routes/healthRoutes");

const app = express();
const server = http.createServer(app);

const PORT = process.env.PORT || 5000;
const CORS_ORIGIN = process.env.CORS_ORIGIN || "http://localhost:5173";

// ===============================
// SOCKET.IO REAL-TIME SERVER
// ===============================
initSocket(server, CORS_ORIGIN);

// ===============================
// SECURITY & MIDDLEWARE
// ===============================
app.use(
  helmet({
    contentSecurityPolicy: false, // Allows flexible modern SPA communication
    crossOriginEmbedderPolicy: false,
  })
);

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (like mobile apps, curl, postman) or localhost
      if (!origin || origin.includes("localhost") || origin.includes("127.0.0.1")) {
        callback(null, true);
      } else {
        callback(null, true);
      }
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "Cookie"],
  })
);

app.use(cookieParser());
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

// Rate limiting (generous for dashboard polling & real-time ops)
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 1000,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: "Too many requests from this IP, please try again later.",
  },
});
app.use("/api", apiLimiter);

// ===============================
// API ROUTES
// ===============================
app.use("/api/auth", authRoutes);
app.use("/api/pipelines", pipelineRoutes);
app.use("/api/builds", buildRoutes);
app.use("/api/deployments", deploymentRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/analytics", analyticsRoutes);
app.use("/api/logs", logRoutes);
app.use("/api/modules", moduleRoutes);
app.use("/api/health", healthRoutes);

// Root informational endpoint
app.get("/", (req, res) => {
  res.json({
    success: true,
    name: "DevOpsHub CI/CD Management Platform API",
    version: "1.0.0",
    status: "operational",
    endpoints: {
      health: "/api/health",
      auth: "/api/auth",
      pipelines: "/api/pipelines",
      builds: "/api/builds",
      deployments: "/api/deployments",
      dashboard: "/api/dashboard/stats",
      analytics: "/api/analytics",
      logs: "/api/logs",
    },
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: `Cannot ${req.method} ${req.originalUrl}`,
  });
});

// Centralized error handler
app.use(errorHandler);

// ===============================
// START SERVER
// ===============================
if (process.env.NODE_ENV !== "test") {
  server.listen(PORT, () => {
    console.log(`[DevOpsHub API] Server running on http://localhost:${PORT}`);
  });
}

module.exports = { app, server };
