import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import {
  ArrowRight,
  Eye,
  EyeOff,
  Github,
  LockKeyhole,
  Mail,
  ShieldCheck,
  GitBranch,
  Terminal,
  Activity,
} from "lucide-react";

import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { auth } from "../../firebase";
import { useAuth } from "../../auth/AuthContext";

function Login() {
  const navigate = useNavigate();
  const location = useLocation();

  const { login } = useAuth();

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);

  const from = location.state?.from?.pathname || "/dashboard";

  // =========================
  // INPUT CHANGE
  // =========================

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setError("");
  };

  // =========================
  // EMAIL LOGIN
  // =========================

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    if (!formData.email || !formData.password) {
      setError("Please enter your email and password.");
      return;
    }

    if (!formData.email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }

    try {
      setIsLoading(true);

      const userCredential = await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      const firebaseUser = userCredential.user;

      login({
        name:
          firebaseUser.displayName ||
          firebaseUser.email?.split("@")[0] ||
          "User",

        email: firebaseUser.email,

        uid: firebaseUser.uid,

        provider: "email",
      });

      navigate(from, { replace: true });
    } catch (error) {
      console.error("Email login error:", error);

      if (error.code === "auth/invalid-credential") {
        setError("Invalid email or password.");
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
      setIsLoading(false);
    }
  };

  // =========================
  // GOOGLE LOGIN
  // =========================

  const handleGoogleLogin = async () => {
    setError("");
    setGoogleLoading(true);

    try {
      const provider = new GoogleAuthProvider();

      provider.setCustomParameters({
        prompt: "select_account",
      });

      const result = await signInWithPopup(auth, provider);

      const firebaseUser = result.user;

      console.log("Google login successful:", firebaseUser);

      login({
        name:
          firebaseUser.displayName ||
          firebaseUser.email?.split("@")[0] ||
          "Google User",

        email: firebaseUser.email,

        uid: firebaseUser.uid,

        photoURL: firebaseUser.photoURL,

        provider: "google",
      });

      navigate(from, { replace: true });
    } catch (error) {
      console.error("Google login error:", error);

      if (error.code === "auth/popup-closed-by-user") {
        setError("Google sign-in was cancelled.");
      } else if (error.code === "auth/popup-blocked") {
        setError(
          "Google popup was blocked by your browser. Please allow popups for localhost."
        );
      } else if (error.code === "auth/unauthorized-domain") {
        setError(
          "This domain is not authorized in Firebase Authentication."
        );
      } else {
        setError(
          `Google sign-in failed: ${error.message || "Please try again."}`
        );
      }
    } finally {
      setGoogleLoading(false);
    }
  };

  // =========================
  // GITHUB LOGIN
  // =========================

  const handleGithubLogin = () => {
    setError("GitHub authentication is not connected yet.");
  };

  // =========================
  // FORGOT PASSWORD
  // =========================

  const handleForgotPassword = () => {
    setError("Password recovery will be connected later.");
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#07090c] text-white">

      {/* Background glow */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <div className="absolute left-[-180px] top-[-180px] h-[420px] w-[420px] rounded-full bg-red-600/10 blur-[120px]" />

        <div className="absolute bottom-[-180px] right-[-120px] h-[450px] w-[450px] rounded-full bg-orange-600/10 blur-[130px]" />

        <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500/5 blur-[100px]" />

      </div>

      {/* Grid */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)",
          backgroundSize: "45px 45px",
        }}
      />

      {/* Floating icons */}

      <div className="pointer-events-none absolute inset-0 hidden lg:block">

        <GitBranch className="absolute left-[8%] top-[18%] h-10 w-10 text-red-500/20 animate-pulse" />

        <Terminal className="absolute bottom-[18%] left-[13%] h-9 w-9 text-orange-500/20 animate-pulse" />

        <Activity className="absolute right-[10%] top-[20%] h-10 w-10 text-red-500/20 animate-pulse" />

        <ShieldCheck className="absolute bottom-[17%] right-[13%] h-10 w-10 text-orange-500/20 animate-pulse" />

      </div>

      {/* Main */}

      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-10">

        <div className="relative w-full max-w-[450px]">

          {/* Animated border */}

          <div
            className="absolute -inset-[2px] rounded-[26px] opacity-90 blur-[1px]"
            style={{
              background:
                "conic-gradient(from 0deg, transparent 0deg, transparent 250deg, #ef4444 285deg, #ff0000 320deg, transparent 355deg)",
              animation: "spinBorder 4s linear infinite",
            }}
          />

          {/* Card */}

          <div className="relative rounded-[24px] border border-white/10 bg-[#0d1117]/95 p-7 shadow-2xl backdrop-blur-xl sm:p-9">

            {/* Logo */}

            <div className="mb-7 flex items-center justify-center">

              <div className="flex items-center gap-3">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-red-500 to-orange-600 shadow-lg shadow-red-500/20">

                  <span className="text-xl font-black">
                    D
                  </span>

                </div>

                <div>

                  <h1 className="text-xl font-bold tracking-tight">

                    DevOps
                    <span className="text-red-500">
                      Hub
                    </span>

                  </h1>

                  <p className="text-[9px] uppercase tracking-[0.2em] text-gray-500">
                    CI/CD Pipeline Platform
                  </p>

                </div>

              </div>

            </div>

            {/* Heading */}

            <div className="mb-7 text-center">

              <h2 className="text-2xl font-bold">
                Welcome back
              </h2>

              <p className="mt-2 text-sm text-gray-400">
                Sign in to manage your DevOps pipelines
              </p>

            </div>

            {/* Error */}

            {error && (
              <div className="mb-4 rounded-lg border border-red-500/20 bg-red-500/10 px-3 py-2.5 text-xs text-red-400">
                {error}
              </div>
            )}

            {/* Google + GitHub */}

            <div className="grid grid-cols-2 gap-3">

              <button
                type="button"
                onClick={handleGoogleLogin}
                disabled={googleLoading}
                className="flex h-11 items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] text-sm font-medium transition hover:border-red-500/40 hover:bg-white/[0.07] disabled:cursor-not-allowed disabled:opacity-60"
              >

                <GoogleIcon />

                {googleLoading ? "Signing in..." : "Google"}

              </button>

              <button
                type="button"
                onClick={handleGithubLogin}
                className="flex h-11 items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] text-sm font-medium transition hover:border-red-500/40 hover:bg-white/[0.07]"
              >

                <Github size={18} />

                GitHub

              </button>

            </div>

            {/* Divider */}

            <div className="my-6 flex items-center gap-3">

              <div className="h-px flex-1 bg-white/10" />

              <span className="text-[10px] uppercase tracking-wider text-gray-600">
                or continue with email
              </span>

              <div className="h-px flex-1 bg-white/10" />

            </div>

            {/* Email form */}

            <form
              onSubmit={handleSubmit}
              className="space-y-4"
            >

              {/* Email */}

              <div>

                <label className="mb-2 block text-xs font-medium text-gray-300">
                  Email address
                </label>

                <div className="relative">

                  <Mail
                    size={17}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                  />

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="h-11 w-full rounded-lg border border-white/10 bg-black/20 pl-10 pr-4 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-red-500/70 focus:ring-2 focus:ring-red-500/10"
                  />

                </div>

              </div>

              {/* Password */}

              <div>

                <div className="mb-2 flex items-center justify-between">

                  <label className="text-xs font-medium text-gray-300">
                    Password
                  </label>

                  <button
                    type="button"
                    onClick={handleForgotPassword}
                    className="text-[11px] text-red-400 hover:text-red-300"
                  >
                    Forgot password?
                  </button>

                </div>

                <div className="relative">

                  <LockKeyhole
                    size={17}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                  />

                  <input
                    type={
                      showPassword
                        ? "text"
                        : "password"
                    }
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    className="h-11 w-full rounded-lg border border-white/10 bg-black/20 pl-10 pr-11 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-red-500/70 focus:ring-2 focus:ring-red-500/10"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword(
                        (previous) => !previous
                      )
                    }
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white"
                  >

                    {showPassword ? (
                      <EyeOff size={17} />
                    ) : (
                      <Eye size={17} />
                    )}

                  </button>

                </div>

              </div>

              {/* Remember */}

              <div className="flex items-center gap-2">

                <input
                  id="remember"
                  type="checkbox"
                  defaultChecked
                  className="h-3.5 w-3.5 accent-red-500"
                />

                <label
                  htmlFor="remember"
                  className="text-xs text-gray-400"
                >
                  Keep me signed in
                </label>

              </div>

              {/* Sign in */}

              <button
                type="submit"
                disabled={isLoading}
                className="group flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-red-600 to-red-500 text-sm font-semibold shadow-lg shadow-red-600/20 transition hover:from-red-500 hover:to-orange-500 disabled:cursor-not-allowed disabled:opacity-60"
              >

                {isLoading
                  ? "Signing in..."
                  : "Sign in"}

                {!isLoading && (
                  <ArrowRight
                    size={17}
                    className="transition-transform group-hover:translate-x-1"
                  />
                )}

              </button>

            </form>

            {/* Signup */}

            <p className="mt-7 text-center text-xs text-gray-500">

              Don't have an account?{" "}

              <Link
                to="/signup"
                className="font-semibold text-red-400 hover:text-red-300"
              >
                Create account
              </Link>

            </p>

            {/* Security */}

            <div className="mt-6 flex items-center justify-center gap-2 text-[9px] text-gray-600">

              <ShieldCheck size={13} />

              <span>
                Secure DevOpsHub authentication
              </span>

            </div>

          </div>

        </div>

      </div>

      {/* Animation */}

      <style>
        {`
          @keyframes spinBorder {
            from {
              transform: rotate(0deg);
            }

            to {
              transform: rotate(360deg);
            }
          }
        `}
      </style>

    </div>
  );
}

// =========================
// GOOGLE ICON
// =========================

function GoogleIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      aria-hidden="true"
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
  );
}

export default Login;