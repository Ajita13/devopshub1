import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowRight,
  Eye,
  EyeOff,
  Github,
  LockKeyhole,
  Mail,
  ShieldCheck,
  User,
  GitBranch,
  Terminal,
  Activity,
  CheckCircle2,
} from "lucide-react";

import { useAuth } from "../../auth/AuthContext";

function Signup() {
  const navigate = useNavigate();
  const { signup } = useAuth();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, password, confirmPassword } = formData;

    if (!name || !email || !password || !confirmPassword) {
      setError("Please fill in all required fields.");
      return;
    }

    if (!email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }

    if (password.length < 6) {
      setError("Password must contain at least 6 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setIsLoading(true);

    // Temporary local signup.
    // Real backend/OAuth authentication will be connected later.
    setTimeout(() => {
      signup({
        name,
        email,
        provider: "email",
      });

      navigate("/dashboard", { replace: true });
    }, 700);
  };

  const handleGoogleSignup = () => {
    setError(
      "Google authentication will be connected in the next authentication step."
    );
  };

  const handleGithubSignup = () => {
    setError(
      "GitHub authentication will be connected in the next authentication step."
    );
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

      {/* Floating DevOps icons */}
      <div className="pointer-events-none absolute inset-0 hidden lg:block">

        <GitBranch
          className="absolute left-[8%] top-[18%] h-10 w-10 text-red-500/20 animate-pulse"
        />

        <Terminal
          className="absolute bottom-[18%] left-[13%] h-9 w-9 text-orange-500/20 animate-pulse"
        />

        <Activity
          className="absolute right-[10%] top-[20%] h-10 w-10 text-red-500/20 animate-pulse"
        />

        <ShieldCheck
          className="absolute bottom-[17%] right-[13%] h-10 w-10 text-orange-500/20 animate-pulse"
        />

      </div>

      {/* Main */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-8">

        {/* Animated border */}
        <div className="relative w-full max-w-[470px]">

          <div
            className="absolute -inset-[2px] rounded-[26px] opacity-90"
            style={{
              background:
                "conic-gradient(from 0deg, transparent 0deg, transparent 250deg, #ef4444 285deg, #ff0000 320deg, transparent 355deg)",
              animation: "spinBorder 4s linear infinite",
            }}
          />

          {/* Signup card */}
          <div className="relative rounded-[24px] border border-white/10 bg-[#0d1117]/95 p-7 shadow-2xl backdrop-blur-xl sm:p-9">

            {/* Logo */}
            <div className="mb-6 flex items-center justify-center">

              <div className="flex items-center gap-3">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-red-500 to-orange-600 shadow-lg shadow-red-500/20">
                  <span className="text-xl font-black">D</span>
                </div>

                <div>
                  <h1 className="text-xl font-bold tracking-tight">
                    DevOps<span className="text-red-500">Hub</span>
                  </h1>

                  <p className="text-[9px] uppercase tracking-[0.2em] text-gray-500">
                    CI/CD Pipeline Platform
                  </p>
                </div>

              </div>

            </div>

            {/* Heading */}
            <div className="mb-6 text-center">

              <h2 className="text-2xl font-bold">
                Create your account
              </h2>

              <p className="mt-2 text-sm text-gray-400">
                Start managing your DevOps workflow today
              </p>

            </div>

            {/* Error */}
            {error && (
              <div className="mb-4 rounded-lg border border-red-500/20 bg-red-500/10 px-3 py-2.5 text-xs text-red-400">
                {error}
              </div>
            )}

            {/* Social buttons */}
            <div className="grid grid-cols-2 gap-3">

              <button
                type="button"
                onClick={handleGoogleSignup}
                className="flex h-11 items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] text-sm font-medium transition hover:border-red-500/40 hover:bg-white/[0.07]"
              >
                <GoogleIcon />
                Google
              </button>

              <button
                type="button"
                onClick={handleGithubSignup}
                className="flex h-11 items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] text-sm font-medium transition hover:border-red-500/40 hover:bg-white/[0.07]"
              >
                <Github size={18} />
                GitHub
              </button>

            </div>

            {/* Divider */}
            <div className="my-5 flex items-center gap-3">

              <div className="h-px flex-1 bg-white/10" />

              <span className="text-[10px] uppercase tracking-wider text-gray-600">
                or create with email
              </span>

              <div className="h-px flex-1 bg-white/10" />

            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-3.5">

              {/* Name */}
              <div>

                <label className="mb-1.5 block text-xs font-medium text-gray-300">
                  Full name
                </label>

                <div className="relative">

                  <User
                    size={17}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                  />

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="h-11 w-full rounded-lg border border-white/10 bg-black/20 pl-10 pr-4 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-red-500/70 focus:ring-2 focus:ring-red-500/10"
                  />

                </div>

              </div>

              {/* Email */}
              <div>

                <label className="mb-1.5 block text-xs font-medium text-gray-300">
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

                <label className="mb-1.5 block text-xs font-medium text-gray-300">
                  Password
                </label>

                <div className="relative">

                  <LockKeyhole
                    size={17}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                  />

                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Create a password"
                    className="h-11 w-full rounded-lg border border-white/10 bg-black/20 pl-10 pr-11 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-red-500/70 focus:ring-2 focus:ring-red-500/10"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword((previous) => !previous)
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

              {/* Confirm password */}
              <div>

                <label className="mb-1.5 block text-xs font-medium text-gray-300">
                  Confirm password
                </label>

                <div className="relative">

                  <LockKeyhole
                    size={17}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                  />

                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm your password"
                    className="h-11 w-full rounded-lg border border-white/10 bg-black/20 pl-10 pr-11 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-red-500/70 focus:ring-2 focus:ring-red-500/10"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowConfirmPassword(
                        (previous) => !previous
                      )
                    }
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white"
                  >
                    {showConfirmPassword ? (
                      <EyeOff size={17} />
                    ) : (
                      <Eye size={17} />
                    )}
                  </button>

                </div>

              </div>

              {/* Password requirements */}
              <div className="rounded-lg border border-white/5 bg-white/[0.02] px-3 py-2.5">

                <p className="mb-1.5 text-[10px] font-medium text-gray-400">
                  Password requirements
                </p>

                <div className="grid grid-cols-2 gap-1.5">

                  <PasswordRule
                    active={formData.password.length >= 6}
                    text="6+ characters"
                  />

                  <PasswordRule
                    active={/[A-Z]/.test(formData.password)}
                    text="Uppercase letter"
                  />

                  <PasswordRule
                    active={/[0-9]/.test(formData.password)}
                    text="Number"
                  />

                  <PasswordRule
                    active={/[!@#$%^&*]/.test(formData.password)}
                    text="Special character"
                  />

                </div>

              </div>

              {/* Terms */}
              <div className="flex items-start gap-2 pt-1">

                <input
                  id="terms"
                  type="checkbox"
                  required
                  className="mt-0.5 h-3.5 w-3.5 accent-red-500"
                />

                <label
                  htmlFor="terms"
                  className="text-[10px] leading-4 text-gray-500"
                >
                  I agree to the DevOpsHub{" "}
                  <button
                    type="button"
                    className="text-red-400 hover:text-red-300"
                  >
                    Terms of Service
                  </button>{" "}
                  and{" "}
                  <button
                    type="button"
                    className="text-red-400 hover:text-red-300"
                  >
                    Privacy Policy
                  </button>
                  .
                </label>

              </div>

              {/* Create account */}
              <button
                type="submit"
                disabled={isLoading}
                className="group flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-red-600 to-red-500 text-sm font-semibold shadow-lg shadow-red-600/20 transition hover:from-red-500 hover:to-orange-500 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isLoading ? "Creating account..." : "Create account"}

                {!isLoading && (
                  <ArrowRight
                    size={17}
                    className="transition-transform group-hover:translate-x-1"
                  />
                )}
              </button>

            </form>

            {/* Login link */}
            <p className="mt-6 text-center text-xs text-gray-500">

              Already have an account?{" "}

              <Link
                to="/login"
                className="font-semibold text-red-400 hover:text-red-300"
              >
                Sign in
              </Link>

            </p>

            {/* Security */}
            <div className="mt-5 flex items-center justify-center gap-2 text-[9px] text-gray-600">

              <ShieldCheck size={13} />

              <span>
                Your account is protected by DevOpsHub security
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

function PasswordRule({ active, text }) {
  return (
    <div className="flex items-center gap-1.5 text-[9px]">

      <CheckCircle2
        size={11}
        className={active ? "text-green-500" : "text-gray-700"}
      />

      <span className={active ? "text-gray-300" : "text-gray-600"}>
        {text}
      </span>

    </div>
  );
}

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

export default Signup;