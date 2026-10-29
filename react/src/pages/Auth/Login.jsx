import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  Github,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

import { motion } from "framer-motion";

import { auth } from "../../firebase";
import { useAuth } from "../../auth/AuthContext";

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // =========================================================
  // EMAIL LOGIN
  // =========================================================

  const handleLogin = async (e) => {
    e.preventDefault();

    setError("");

    if (!email || !password) {
      setError("Please enter your email and password.");
      return;
    }

    try {
      setLoading(true);

      const result = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      login(result.user);

      navigate("/dashboard");
    } catch (error) {
      console.error("Email login error:", error);

      if (error.code === "auth/invalid-credential") {
        setError("Incorrect email or password.");
      } else if (error.code === "auth/user-not-found") {
        setError("No account found with this email.");
      } else if (error.code === "auth/wrong-password") {
        setError("Incorrect password.");
      } else if (error.code === "auth/invalid-email") {
        setError("Please enter a valid email address.");
      } else {
        setError("Login failed. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  // =========================================================
  // GOOGLE LOGIN
  // =========================================================

  const handleGoogleLogin = async () => {
    setError("");

    try {
      setLoading(true);

      const provider = new GoogleAuthProvider();

      provider.setCustomParameters({
        prompt: "select_account",
      });

      const result = await signInWithPopup(
        auth,
        provider
      );

      console.log("Google login successful:", result.user);

      login(result.user);

      navigate("/dashboard");
    } catch (error) {
      console.error("Google login error:", error);

      if (error.code === "auth/popup-closed-by-user") {
        setError("Google sign-in was cancelled.");
      } else if (error.code === "auth/popup-blocked") {
        setError(
          "Google popup was blocked. Please allow popups for this site."
        );
      } else if (error.code === "auth/unauthorized-domain") {
        setError(
          "This domain is not authorized in Firebase Authentication."
        );
      } else if (
        error.code === "auth/account-exists-with-different-credential"
      ) {
        setError(
          "An account already exists with this email using another sign-in method."
        );
      } else {
        setError(
          error.message || "Google sign-in failed."
        );
      }
    } finally {
      setLoading(false);
    }
  };

  // =========================================================
  // GITHUB
  // =========================================================

  const handleGithubLogin = () => {
    setError(
      "GitHub authentication is not connected yet."
    );
  };

  // =========================================================
  // FORGOT PASSWORD
  // =========================================================

  const handleForgotPassword = () => {
    setError(
      "Password recovery will be connected later."
    );
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#08090b] text-white">

      {/* =====================================================
          ANIMATED BACKGROUND
      ===================================================== */}

      <div className="absolute inset-0 overflow-hidden">

        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -80, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[10%] top-[15%] h-72 w-72 rounded-full bg-red-600/10 blur-3xl"
        />

        <motion.div
          animate={{
            x: [0, -120, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-[10%] bottom-[10%] h-80 w-80 rounded-full bg-orange-600/10 blur-3xl"
        />

      </div>

      {/* =====================================================
          MAIN
      ===================================================== */}

      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-10">

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          className="relative w-full max-w-md"
        >

          {/* =================================================
              ANIMATED BORDER
          ================================================= */}

          <div className="absolute -inset-[2px] overflow-hidden rounded-3xl">

            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute left-1/2 top-1/2 h-[180%] w-[180%] -translate-x-1/2 -translate-y-1/2 bg-[conic-gradient(transparent,transparent,#ef4444,transparent,transparent)]"
            />

          </div>

          {/* =================================================
              CARD
          ================================================= */}

          <div className="relative rounded-3xl border border-red-500/20 bg-[#101215]/95 p-8 shadow-2xl backdrop-blur-xl">

            {/* =================================================
                LOGO
            ================================================= */}

            <div className="mb-7 text-center">

              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 0px rgba(239,68,68,0)",
                    "0 0 30px rgba(239,68,68,0.35)",
                    "0 0 0px rgba(239,68,68,0)",
                  ],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                }}
                className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-600"
              >
                <ShieldCheck size={28} />
              </motion.div>

              <h1 className="text-3xl font-bold">
                DevOps
                <span className="text-red-500">
                  Hub
                </span>
              </h1>

              <p className="mt-2 text-sm text-gray-400">
                CI/CD Pipeline Management Platform
              </p>

            </div>

            {/* =================================================
                HEADING
            ================================================= */}

            <div className="mb-6">

              <h2 className="text-xl font-semibold">
                Welcome back
              </h2>

              <p className="mt-1 text-sm text-gray-400">
                Sign in to continue to your dashboard.
              </p>

            </div>

            {/* =================================================
                ERROR
            ================================================= */}

            {error && (
              <div className="mb-5 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-400">
                {error}
              </div>
            )}

            {/* =================================================
                GOOGLE + GITHUB
            ================================================= */}

            <div className="grid grid-cols-2 gap-3">

              {/* GOOGLE */}

              <button
                type="button"
                onClick={handleGoogleLogin}
                disabled={loading}
                className="flex items-center justify-center gap-2 rounded-xl border border-gray-700 bg-[#17191d] py-3 text-sm transition hover:border-red-500/50 hover:bg-[#1d2025] disabled:cursor-not-allowed disabled:opacity-50"
              >

                {/* Google Logo */}

                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#4285F4"
                    d="M21.35 12.27c0-.72-.06-1.42-.18-2.09H12v3.95h5.24a4.48 4.48 0 0 1-1.94 2.94v2.45h3.14c1.84-1.69 2.91-4.18 2.91-7.25Z"
                  />

                  <path
                    fill="#34A853"
                    d="M12 21.5c2.63 0 4.84-.87 6.45-2.36l-3.14-2.45c-.87.58-1.98.92-3.31.92-2.54 0-4.69-1.72-5.46-4.03H3.3v2.53A9.75 9.75 0 0 0 12 21.5Z"
                  />

                  <path
                    fill="#FBBC05"
                    d="M6.54 13.58A5.86 5.86 0 0 1 6.23 12c0-.55.11-1.08.31-1.58V7.89H3.3A9.75 9.75 0 0 0 2.25 12c0 1.57.38 3.05 1.05 4.11l3.24-2.53Z"
                  />

                  <path
                    fill="#EA4335"
                    d="M12 6.39c1.43 0 2.71.49 3.72 1.46l2.79-2.79C16.84 3.48 14.63 2.5 12 2.5a9.75 9.75 0 0 0-8.7 5.39l3.24 2.53C7.31 8.11 9.46 6.39 12 6.39Z"
                  />
                </svg>

                Google

              </button>

              {/* GITHUB */}

              <button
                type="button"
                onClick={handleGithubLogin}
                className="flex items-center justify-center gap-2 rounded-xl border border-gray-700 bg-[#17191d] py-3 text-sm transition hover:border-red-500/50 hover:bg-[#1d2025]"
              >

                <Github size={18} />

                GitHub

              </button>

            </div>

            {/* =================================================
                DIVIDER
            ================================================= */}

            <div className="my-6 flex items-center gap-3">

              <div className="h-px flex-1 bg-gray-700" />

              <span className="text-xs text-gray-500">
                OR CONTINUE WITH EMAIL
              </span>

              <div className="h-px flex-1 bg-gray-700" />

            </div>

            {/* =================================================
                FORM
            ================================================= */}

            <form
              onSubmit={handleLogin}
              className="space-y-4"
            >

              {/* EMAIL */}

              <div>

                <label className="mb-2 block text-sm text-gray-300">
                  Email address
                </label>

                <div className="relative">

                  <Mail
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                  />

                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setError("");
                    }}
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-gray-700 bg-[#17191d] py-3 pl-10 pr-4 text-sm outline-none transition focus:border-red-500 focus:ring-1 focus:ring-red-500"
                  />

                </div>

              </div>

              {/* PASSWORD */}

              <div>

                <div className="mb-2 flex justify-between">

                  <label className="text-sm text-gray-300">
                    Password
                  </label>

                  <button
                    type="button"
                    onClick={handleForgotPassword}
                    className="text-xs text-red-400 hover:text-red-300"
                  >
                    Forgot password?
                  </button>

                </div>

                <div className="relative">

                  <Lock
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                  />

                  <input
                    type={
                      showPassword
                        ? "text"
                        : "password"
                    }
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      setError("");
                    }}
                    placeholder="Enter your password"
                    className="w-full rounded-xl border border-gray-700 bg-[#17191d] py-3 pl-10 pr-11 text-sm outline-none transition focus:border-red-500 focus:ring-1 focus:ring-red-500"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword(
                        !showPassword
                      )
                    }
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white"
                  >
                    {showPassword ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>

                </div>

              </div>

              {/* REMEMBER */}

              <div className="flex items-center gap-2">

                <input
                  id="remember"
                  type="checkbox"
                  className="h-4 w-4 accent-red-500"
                />

                <label
                  htmlFor="remember"
                  className="text-xs text-gray-400"
                >
                  Remember me
                </label>

              </div>

              {/* LOGIN */}

              <motion.button
                whileHover={{
                  scale: 1.01,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                type="submit"
                disabled={loading}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-red-600 py-3 font-semibold transition hover:bg-red-500 disabled:cursor-not-allowed disabled:opacity-50"
              >

                {loading
                  ? "Signing in..."
                  : "Sign In"}

                {!loading && (
                  <ArrowRight size={18} />
                )}

              </motion.button>

            </form>

            {/* =================================================
                SIGNUP
            ================================================= */}

            <p className="mt-7 text-center text-sm text-gray-400">

              Don't have an account?{" "}

              <Link
                to="/signup"
                className="font-semibold text-red-500 hover:text-red-400"
              >
                Create account
              </Link>

            </p>

          </div>

        </motion.div>

      </div>

    </div>
  );
}

export default Login;