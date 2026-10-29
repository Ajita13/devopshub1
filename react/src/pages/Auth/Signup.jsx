import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowRight,
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  ShieldCheck,
  User,
  GitBranch,
  Terminal,
  Activity,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from "lucide-react";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../../firebase";
import { useAuth } from "../../auth/AuthContext";

function Signup() {
  const navigate = useNavigate();
  const { register, loginWithGoogle } = useAuth();

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
  const [googleLoading, setGoogleLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError("");
  };

  // Google OAuth Signup Flow
  const handleGoogleSignup = async () => {
    setError("");
    setGoogleLoading(true);

    try {
      const result = await signInWithPopup(auth, googleProvider);
      const firebaseUser = result.user;

      await loginWithGoogle({
        displayName: firebaseUser.displayName || firebaseUser.email?.split("@")[0] || "DevOps User",
        email: firebaseUser.email,
        photoURL: firebaseUser.photoURL,
        uid: firebaseUser.uid,
      });

      navigate("/dashboard", { replace: true });
    } catch (err) {
      console.error("Google signup error:", err);
      if (err.code === "auth/popup-closed-by-user") {
        setError("Google signup was closed before completion.");
      } else if (err.code === "auth/popup-blocked") {
        setError("Sign-in popup was blocked by your browser. Please allow popups for localhost.");
      } else if (err.code === "auth/unauthorized-domain") {
        setError("Domain not authorized in Firebase Authentication console.");
      } else {
        setError(err.message || "Google signup failed. Please try again.");
      }
    } finally {
      setGoogleLoading(false);
    }
  };

  // Email Signup Flow
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const { name, email, password, confirmPassword } = formData;

    if (!name.trim() || !email.trim() || !password || !confirmPassword) {
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

    try {
      setIsLoading(true);
      await register(name.trim(), email.trim(), password);
      navigate("/dashboard", { replace: true });
    } catch (err) {
      console.error("Signup error:", err);
      setError(err.message || "Failed to create account. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#07090c] text-white">
      {/* Background Ambience & Glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-150px] top-[-150px] h-[420px] w-[420px] rounded-full bg-red-600/15 blur-[120px]" />
        <div className="absolute bottom-[-150px] right-[-150px] h-[450px] w-[450px] rounded-full bg-orange-600/15 blur-[130px]" />
        <div className="absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500/10 blur-[100px]" />
      </div>

      {/* Grid Pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />

      {/* Floating DevOps Icons */}
      <div className="pointer-events-none absolute inset-0 hidden lg:block">
        <GitBranch className="absolute left-[8%] top-[18%] h-9 w-9 text-red-500/20 animate-pulse" />
        <Terminal className="absolute bottom-[18%] left-[12%] h-8 w-8 text-orange-500/20 animate-pulse" />
        <Activity className="absolute right-[10%] top-[20%] h-9 w-9 text-red-500/20 animate-pulse" />
        <ShieldCheck className="absolute bottom-[16%] right-[12%] h-9 w-9 text-orange-500/20 animate-pulse" />
      </div>

      {/* Main Container */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-10">
        <div className="relative w-full max-w-[460px]">
          {/* Animated Glowing Border */}
          <div
            className="absolute -inset-[2px] rounded-[26px] opacity-80"
            style={{
              background:
                "conic-gradient(from 0deg, transparent 0deg, transparent 240deg, #f97316 280deg, #ef4444 320deg, transparent 360deg)",
              animation: "spinBorder 4s linear infinite",
            }}
          />

          {/* Signup Card */}
          <div className="relative rounded-[24px] border border-white/10 bg-[#0d1117]/95 p-7 shadow-2xl backdrop-blur-xl sm:p-9">
            {/* Header */}
            <div className="mb-6 flex flex-col items-center text-center">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-red-600 shadow-lg shadow-orange-500/25">
                <span className="text-2xl font-black text-white">D</span>
              </div>
              <h1 className="text-2xl font-bold tracking-tight text-white">
                DevOps<span className="text-orange-500">Hub</span>
              </h1>
              <p className="mt-1 text-xs text-gray-400">
                Join DevOpsHub to automate builds and live pipelines
              </p>
            </div>

            {/* Error Message */}
            {error && (
              <div className="mb-5 flex items-start gap-2.5 rounded-xl border border-red-500/30 bg-red-500/10 p-3 text-xs text-red-400">
                <AlertCircle size={16} className="shrink-0 mt-0.5" />
                <span>{error}</span>
              </div>
            )}

            {/* COMPULSORY GOOGLE SIGN-UP BUTTON */}
            <div className="mb-5">
              <button
                type="button"
                onClick={handleGoogleSignup}
                disabled={googleLoading || isLoading}
                className="group relative flex h-12 w-full items-center justify-center gap-3 rounded-xl border border-white/15 bg-white/5 px-4 text-sm font-semibold text-white shadow-lg backdrop-blur-md transition-all hover:bg-white/10 hover:border-white/25 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {googleLoading ? (
                  <>
                    <Loader2 size={18} className="animate-spin text-orange-400" />
                    <span>Connecting to Google...</span>
                  </>
                ) : (
                  <>
                    <GoogleIcon />
                    <span>Continue with Google</span>
                  </>
                )}
              </button>
            </div>

            {/* Divider */}
            <div className="relative mb-5 flex items-center justify-center">
              <div className="h-px w-full bg-white/10" />
              <span className="absolute bg-[#0d1117] px-3 text-[11px] font-medium uppercase tracking-wider text-gray-500">
                or register with email
              </span>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="mb-1 block text-xs font-medium text-gray-300">Full Name</label>
                <div className="relative">
                  <User size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Alex Morgan"
                    required
                    className="h-10 w-full rounded-xl border border-white/10 bg-black/30 pl-10 pr-4 text-sm text-white placeholder-gray-600 outline-none transition focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                  />
                </div>
              </div>

              <div>
                <label className="mb-1 block text-xs font-medium text-gray-300">Email Address</label>
                <div className="relative">
                  <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="alex@company.com"
                    required
                    className="h-10 w-full rounded-xl border border-white/10 bg-black/30 pl-10 pr-4 text-sm text-white placeholder-gray-600 outline-none transition focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                  />
                </div>
              </div>

              <div>
                <label className="mb-1 block text-xs font-medium text-gray-300">Password</label>
                <div className="relative">
                  <LockKeyhole size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500" />
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="At least 6 characters"
                    required
                    className="h-10 w-full rounded-xl border border-white/10 bg-black/30 pl-10 pr-11 text-sm text-white placeholder-gray-600 outline-none transition focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300"
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>

              <div>
                <label className="mb-1 block text-xs font-medium text-gray-300">Confirm Password</label>
                <div className="relative">
                  <LockKeyhole size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500" />
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Repeat password"
                    required
                    className="h-10 w-full rounded-xl border border-white/10 bg-black/30 pl-10 pr-11 text-sm text-white placeholder-gray-600 outline-none transition focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300"
                  >
                    {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>

              {/* Password Requirements */}
              <div className="rounded-xl border border-white/5 bg-white/[0.02] p-2.5">
                <div className="grid grid-cols-2 gap-1.5">
                  <PasswordRule
                    active={formData.password.length >= 6}
                    text="6+ characters"
                  />
                  <PasswordRule
                    active={formData.password === formData.confirmPassword && formData.password.length > 0}
                    text="Passwords match"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading || googleLoading}
                className="group flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-red-600 text-sm font-semibold text-white shadow-lg shadow-orange-500/25 transition-all hover:from-orange-600 hover:to-red-700 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isLoading ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    <span>Creating account...</span>
                  </>
                ) : (
                  <>
                    <span>Create Account</span>
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </>
                )}
              </button>
            </form>

            {/* Bottom Links */}
            <div className="mt-5 text-center text-xs text-gray-500">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-semibold text-orange-400 hover:text-orange-300"
              >
                Sign in
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spinBorder {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

function PasswordRule({ active, text }) {
  return (
    <div className="flex items-center gap-1.5 text-[10px]">
      <CheckCircle2
        size={12}
        className={active ? "text-emerald-400" : "text-gray-700"}
      />
      <span className={active ? "text-gray-300" : "text-gray-500"}>{text}</span>
    </div>
  );
}

function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
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
