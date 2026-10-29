import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  ArrowRight,
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  ShieldCheck,
  GitBranch,
  Terminal,
  Activity,
  AlertCircle,
  Loader2,
  Sparkles,
} from "lucide-react";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../../firebase";
import { useAuth } from "../../auth/AuthContext";

function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const { login, loginWithGoogle } = useAuth();

  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);

  const from = location.state?.from?.pathname || "/dashboard";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError("");
  };

  // Google OAuth Login Flow
  const handleGoogleLogin = async () => {
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

      navigate(from, { replace: true });
    } catch (err) {
      console.error("Google sign-in error:", err);
      if (err.code === "auth/popup-closed-by-user") {
        setError("Google sign-in was closed before completion.");
      } else if (err.code === "auth/popup-blocked") {
        setError("Sign-in popup was blocked by your browser. Please allow popups for localhost.");
      } else if (err.code === "auth/unauthorized-domain") {
        setError("Domain not authorized in Firebase Authentication console.");
      } else {
        setError(err.message || "Google sign-in failed. Please try again.");
      }
    } finally {
      setGoogleLoading(false);
    }
  };

  // Email + Password Login Flow
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!formData.email.trim() || !formData.password) {
      setError("Please enter your email and password.");
      return;
    }

    try {
      setIsLoading(true);
      await login(formData.email.trim(), formData.password);
      navigate(from, { replace: true });
    } catch (err) {
      console.error("Login error:", err);
      setError(err.message || "Invalid email or password.");
    } finally {
      setIsLoading(false);
    }
  };

  // Helper for evaluation / quick testing
  const autofillAdmin = () => {
    setFormData({
      email: "admin@devopshub.io",
      password: "AdminPassword123!",
    });
    setError("");
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#07090c] text-white">
      {/* Background Ambience & Glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-150px] top-[-150px] h-[400px] w-[400px] rounded-full bg-red-600/15 blur-[120px]" />
        <div className="absolute bottom-[-150px] right-[-150px] h-[450px] w-[450px] rounded-full bg-orange-600/15 blur-[130px]" />
        <div className="absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/10 blur-[100px]" />
      </div>

      {/* Decorative Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />

      {/* Floating DevOps Elements */}
      <div className="pointer-events-none absolute inset-0 hidden lg:block">
        <GitBranch className="absolute left-[10%] top-[20%] h-9 w-9 text-red-500/20 animate-pulse" />
        <Terminal className="absolute bottom-[20%] left-[12%] h-8 w-8 text-orange-500/20 animate-pulse" />
        <Activity className="absolute right-[12%] top-[22%] h-9 w-9 text-red-500/20 animate-pulse" />
        <ShieldCheck className="absolute bottom-[18%] right-[10%] h-9 w-9 text-orange-500/20 animate-pulse" />
      </div>

      {/* Main Container */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-10">
        <div className="relative w-full max-w-[440px]">
          {/* Animated Neon Border */}
          <div
            className="absolute -inset-[2px] rounded-[26px] opacity-80"
            style={{
              background:
                "conic-gradient(from 0deg, transparent 0deg, transparent 240deg, #f97316 280deg, #ef4444 320deg, transparent 360deg)",
              animation: "spinBorder 4s linear infinite",
            }}
          />

          {/* Login Card */}
          <div className="relative rounded-[24px] border border-white/10 bg-[#0d1117]/95 p-7 shadow-2xl backdrop-blur-xl sm:p-9">
            {/* Header / Logo */}
            <div className="mb-6 flex flex-col items-center text-center">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-red-600 shadow-lg shadow-orange-500/25">
                <span className="text-2xl font-black text-white">D</span>
              </div>
              <h1 className="text-2xl font-bold tracking-tight text-white">
                DevOps<span className="text-orange-500">Hub</span>
              </h1>
              <p className="mt-1 text-xs text-gray-400">
                CI/CD Pipeline Platform & Real-Time Monitoring
              </p>
            </div>

            {/* Error Message */}
            {error && (
              <div className="mb-5 flex items-start gap-2.5 rounded-xl border border-red-500/30 bg-red-500/10 p-3 text-xs text-red-400">
                <AlertCircle size={16} className="shrink-0 mt-0.5" />
                <span>{error}</span>
              </div>
            )}

            {/* COMPULSORY GOOGLE SIGN-IN BUTTON (PRIMARY) */}
            <div className="mb-5">
              <button
                type="button"
                onClick={handleGoogleLogin}
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
                or continue with email
              </span>
            </div>

            {/* Email Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="mb-1.5 block text-xs font-medium text-gray-300">
                  Email Address
                </label>
                <div className="relative">
                  <Mail
                    size={16}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@company.com"
                    required
                    className="h-11 w-full rounded-xl border border-white/10 bg-black/30 pl-10 pr-4 text-sm text-white placeholder-gray-600 outline-none transition focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                  />
                </div>
              </div>

              <div>
                <div className="mb-1.5 flex items-center justify-between">
                  <label className="text-xs font-medium text-gray-300">Password</label>
                  <button
                    type="button"
                    onClick={autofillAdmin}
                    className="inline-flex items-center gap-1 text-[11px] text-orange-400 hover:text-orange-300"
                  >
                    <Sparkles size={12} />
                    <span>Autofill Admin</span>
                  </button>
                </div>
                <div className="relative">
                  <LockKeyhole
                    size={16}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500"
                  />
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="••••••••"
                    required
                    className="h-11 w-full rounded-xl border border-white/10 bg-black/30 pl-10 pr-11 text-sm text-white placeholder-gray-600 outline-none transition focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
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

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading || googleLoading}
                className="group flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-red-600 text-sm font-semibold text-white shadow-lg shadow-orange-500/25 transition-all hover:from-orange-600 hover:to-red-700 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isLoading ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    <span>Signing in...</span>
                  </>
                ) : (
                  <>
                    <span>Sign In</span>
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </>
                )}
              </button>
            </form>

            {/* Bottom Links */}
            <div className="mt-6 text-center text-xs text-gray-500">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="font-semibold text-orange-400 hover:text-orange-300"
              >
                Create account
              </Link>
            </div>

            <div className="mt-5 flex items-center justify-center gap-1.5 text-[10px] text-gray-600">
              <ShieldCheck size={13} className="text-orange-500" />
              <span>Real-Time WebSocket & Database Protected</span>
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

export default Login;
