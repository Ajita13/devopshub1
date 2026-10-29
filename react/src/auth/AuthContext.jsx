import { createContext, useContext, useEffect, useState } from "react";
import {
  getCurrentUser,
  loginUser,
  registerUser,
  logoutUser,
  getToken,
  setToken,
} from "../services/api";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Load user on application startup
  useEffect(() => {
    async function initAuth() {
      const token = getToken();
      if (!token) {
        setUser(null);
        setLoading(false);
        return;
      }

      try {
        const res = await getCurrentUser();
        if (res && res.success && res.user) {
          setUser(res.user);
        } else {
          setUser(null);
          setToken(null);
        }
      } catch (err) {
        console.warn("Initial auth verification failed:", err.message);
        setUser(null);
        setToken(null);
      } finally {
        setLoading(false);
      }
    }

    initAuth();

    // Listen for global logout events (e.g. 401 refresh token expiration)
    const handleGlobalLogout = () => {
      setUser(null);
    };
    window.addEventListener("auth:logout", handleGlobalLogout);
    return () => window.removeEventListener("auth:logout", handleGlobalLogout);
  }, []);

  const login = async (email, password) => {
    const res = await loginUser({ email, password });
    if (res && res.user) {
      setUser(res.user);
    }
    return res;
  };

  const register = async (name, email, password) => {
    const res = await registerUser({ name, email, password });
    if (res && res.user) {
      setUser(res.user);
    }
    return res;
  };

  const logout = async () => {
    try {
      await logoutUser();
    } catch (e) {
      console.error("Logout request error:", e);
    } finally {
      setUser(null);
    }
  };

  const updateCurrentUser = (updatedUser) => {
    setUser((prev) => ({ ...prev, ...updatedUser }));
  };

  const value = {
    user,
    loading,
    isAuthenticated: Boolean(user),
    login,
    register,
    logout,
    updateCurrentUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }
  return context;
}
