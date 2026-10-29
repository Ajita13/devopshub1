import React, { createContext, useContext, useEffect, useState, useRef } from "react";
import { io } from "socket.io-client";
import { getToken } from "../services/api";

const SocketContext = createContext(null);

const SOCKET_URL = import.meta.env.VITE_SOCKET_URL || "http://localhost:5000";

export function SocketProvider({ children }) {
  const [socket, setSocket] = useState(null);
  const [connectionStatus, setConnectionStatus] = useState("connecting"); // "connected" | "connecting" | "offline"
  const socketRef = useRef(null);

  const token = getToken();

  useEffect(() => {
    if (!token) {
      if (socketRef.current) {
        socketRef.current.disconnect();
        socketRef.current = null;
      }
      setSocket(null);
      setConnectionStatus("offline");
      return;
    }

    const socketInstance = io(SOCKET_URL, {
      auth: { token },
      transports: ["websocket", "polling"],
      reconnection: true,
      reconnectionAttempts: Infinity,
      reconnectionDelay: 1000,
      reconnectionDelayMax: 5000,
      timeout: 20000,
    });

    socketRef.current = socketInstance;
    setSocket(socketInstance);
    setConnectionStatus("connecting");

    socketInstance.on("connect", () => {
      console.log("[Socket.IO] Connected to real-time server as ID:", socketInstance.id);
      setConnectionStatus("connected");
    });

    socketInstance.on("disconnect", (reason) => {
      console.log("[Socket.IO] Disconnected:", reason);
      setConnectionStatus(reason === "io client disconnect" ? "offline" : "connecting");
    });

    socketInstance.on("connect_error", (error) => {
      console.warn("[Socket.IO] Connection error:", error.message);
      setConnectionStatus("offline");
    });

    return () => {
      socketInstance.disconnect();
      socketRef.current = null;
    };
  }, [token]);

  const value = {
    socket,
    connectionStatus,
    isConnected: connectionStatus === "connected",
  };

  return <SocketContext.Provider value={value}>{children}</SocketContext.Provider>;
}

export function useSocket() {
  const context = useContext(SocketContext);
  if (!context) {
    throw new Error("useSocket must be used within a SocketProvider");
  }
  return context;
}
