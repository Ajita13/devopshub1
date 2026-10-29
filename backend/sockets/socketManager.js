const { Server } = require("socket.io");
const { verifyAccessToken } = require("../utils/jwt");

let io = null;

function initSocket(server, allowedOrigin) {
  io = new Server(server, {
    cors: {
      origin: allowedOrigin || "*",
      methods: ["GET", "POST", "PUT", "DELETE"],
      credentials: true,
    },
    pingTimeout: 30000,
    pingInterval: 10000,
  });

  // Socket authentication middleware
  io.use((socket, next) => {
    try {
      const token =
        socket.handshake.auth?.token ||
        socket.handshake.headers?.authorization?.replace("Bearer ", "");

      if (!token) {
        return next(new Error("Authentication token required for WebSocket"));
      }

      const decoded = verifyAccessToken(token);
      if (!decoded) {
        return next(new Error("Invalid or expired WebSocket token"));
      }

      socket.user = decoded;
      next();
    } catch (error) {
      next(new Error("WebSocket authentication failed"));
    }
  });

  io.on("connection", (socket) => {
    const userId = socket.user?.id;
    const userRoom = `user_${userId}`;

    socket.join(userRoom);
    console.log(`[Socket] User connected: ${socket.user?.email} (${socket.id}) joined room ${userRoom}`);

    if (socket.user?.role === "admin") {
      socket.join("admin_room");
    }

    // Ping / heartbeat
    socket.on("ping", () => {
      socket.emit("pong", { timestamp: Date.now() });
    });

    socket.on("disconnect", (reason) => {
      console.log(`[Socket] User disconnected: ${socket.user?.email} (${reason})`);
    });
  });

  return io;
}

function getIO() {
  return io;
}

function emitToUser(userId, event, data) {
  if (io && userId) {
    io.to(`user_${userId}`).emit(event, data);
  }
}

function emitToAll(event, data) {
  if (io) {
    io.emit(event, data);
  }
}

module.exports = {
  initSocket,
  getIO,
  emitToUser,
  emitToAll,
};
