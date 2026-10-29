import { createContext, useContext, useEffect, useState } from "react";

import {
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

import { auth } from "../firebase";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        setUser({
          uid: firebaseUser.uid,
          name:
            firebaseUser.displayName ||
            firebaseUser.email?.split("@")[0] ||
            "User",
          email: firebaseUser.email,
          photoURL: firebaseUser.photoURL,
          provider:
            firebaseUser.providerData?.[0]?.providerId || "email",
        });
      } else {
        setUser(null);
      }

      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Login
  const login = (firebaseUser) => {
    if (!firebaseUser) {
      setUser(null);
      return;
    }

    setUser({
      uid: firebaseUser.uid,
      name:
        firebaseUser.displayName ||
        firebaseUser.email?.split("@")[0] ||
        "User",
      email: firebaseUser.email,
      photoURL: firebaseUser.photoURL,
      provider:
        firebaseUser.providerData?.[0]?.providerId || "email",
    });
  };

  // Logout
  const logout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const value = {
    user,
    loading,
    isAuthenticated: Boolean(user),
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      "useAuth must be used inside AuthProvider"
    );
  }

  return context;
}