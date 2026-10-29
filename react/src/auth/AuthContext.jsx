import { createContext, useContext, useEffect, useState } from "react";
import {
  getCurrentUser,
  loginUser,
  registerUser,
  googleLoginApi,
  logoutUser,
  getToken,
  setToken,
} from "../services/api";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      const saved = localStorage.getItem("devopshub_user");
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });
  const [loading, setLoading] = useState(true);

  // Load and verify user on application startup
  useEffect(() => {
    async function initAuth() {
      const token = getToken();
      if (!token) {
        setUser(null);
        localStorage.removeItem("devopshub_user");
        setLoading(false);
        return;
      }

      try {
        const res = await getCurrentUser();
        if (res && res.success && res.user) {
          setUser(res.user);
          localStorage.setItem("devopshub_user", JSON.stringify(res.user));
        } else {
          setUser(null);
          setToken(null);
          localStorage.removeItem("devopshub_user");
        }
      } catch (err) {
        console.warn("Initial auth verification check:", err.message);
        // If server is not reachable but we have cached user, keep user for offline display
        const saved = localStorage.getItem("devopshub_user");
        if (!saved) {
          setUser(null);
          setToken(null);
        }
      } finally {
        setLoading(false);
      }
    }

    initAuth();

    // Listen for global logout events (e.g. 401 refresh token expiration)
    const handleGlobalLogout = () => {
      setUser(null);
      localStorage.removeItem("devopshub_user");
    };
    window.addEventListener("auth:logout", handleGlobalLogout);
    return () => window.removeEventListener("auth:logout", handleGlobalLogout);
  }, []);

  // Standard or Firebase email login
  const login = async (emailOrUserObj, maybePassword) => {
    if (typeof emailOrUserObj === "object" && emailOrUserObj !== null) {
      // Direct user object passed from OAuth / Firebase
      const userData = emailOrUserObj;
      setUser(userData);
      localStorage.setItem("devopshub_user", JSON.stringify(userData));
      return { success: true, user: userData };
    }

    const res = await loginUser({ email: emailOrUserObj, password: maybePassword });
    if (res && res.user) {
      setUser(res.user);
      localStorage.setItem("devopshub_user", JSON.stringify(res.user));
    }
    return res;
  };

  // Google OAuth Login
  const loginWithGoogle = async (googleUser) => {
    try {
      const res = await googleLoginApi({
        email: googleUser.email,
        name: googleUser.displayName || googleUser.name,
        avatar: googleUser.photoURL || googleUser.avatar,
        uid: googleUser.uid,
      });

      if (res && res.user) {
        setUser(res.user);
        localStorage.setItem("devopshub_user", JSON.stringify(res.user));
        return res;
      }
    } catch (err) {
      console.warn("Backend Google login sync failed, falling back to local Firebase session:", err);
      const fallbackUser = {
        name: googleUser.displayName || googleUser.email?.split("@")[0] || "Google User",
        email: googleUser.email,
        avatar: googleUser.photoURL,
        role: "user",
      };
      setUser(fallbackUser);
      localStorage.setItem("devopshub_user", JSON.stringify(fallbackUser));
      return { success: true, user: fallbackUser };
    }
  };

  // Register
  const register = async (nameOrData, maybeEmail, maybePassword) => {
    let name = nameOrData;
    let email = maybeEmail;
    let password = maybePassword;

    if (typeof nameOrData === "object") {
      name = nameOrData.name;
      email = nameOrData.email;
      password = nameOrData.password;
    }

    const res = await registerUser({ name, email, password });
    if (res && res.user) {
      setUser(res.user);
      localStorage.setItem("devopshub_user", JSON.stringify(res.user));
    }
    return res;
  };

  const signup = register;

  const logout = async () => {
    try {
      await logoutUser();
    } catch (e) {
      console.error("Logout request error:", e);
    } finally {
      setUser(null);
      localStorage.removeItem("devopshub_user");
    }
  };

  const updateCurrentUser = (updatedUser) => {
    setUser((prev) => {
      const merged = { ...prev, ...updatedUser };
      localStorage.setItem("devopshub_user", JSON.stringify(merged));
      return merged;
    });
  };

  const value = {
    user,
    loading,
    isAuthenticated: Boolean(user),
    login,
    loginWithGoogle,
    register,
    signup,
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
