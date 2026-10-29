import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  Github,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { motion } from "framer-motion";

function Signup() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignup = (e) => {
    e.preventDefault();

    if (
      !form.name ||
      !form.email ||
      !form.password ||
      !form.confirmPassword
    ) {
      alert("Please fill all required fields.");
      return;
    }

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    localStorage.setItem("devopshub_logged_in", "true");

    navigate("/dashboard");
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#08090b] text-white">

      {/* Background */}
      <div className="absolute inset-0">

        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -80, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
          className="absolute left-[10%] top-[10%] h-72 w-72 rounded-full bg-red-600/10 blur-3xl"
        />

        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 80, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
          }}
          className="absolute bottom-[10%] right-[10%] h-80 w-80 rounded-full bg-red-700/10 blur-3xl"
        />

      </div>

      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-10">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative w-full max-w-md"
        >

          {/* Animated Border */}
          <div className="absolute -inset-[2px] overflow-hidden rounded-3xl">

            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute left-1/2 top-1/2 h-[180%] w-[180%] -translate-x-1/2 -translate-y-1/2 bg-[conic-gradient(transparent,transparent,#ef4444,transparent,transparent)]"
            />

          </div>

          {/* Card */}
          <div className="relative rounded-3xl border border-red-500/20 bg-[#101215]/95 p-8 shadow-2xl backdrop-blur-xl">

            {/* Logo */}
            <div className="mb-6 text-center">

              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-red-600">
                <ShieldCheck size={25} />
              </div>

              <h1 className="text-2xl font-bold">
                DevOps<span className="text-red-500">Hub</span>
              </h1>

              <p className="mt-1 text-xs text-gray-400">
                Create your DevOpsHub account
              </p>

            </div>

            <form onSubmit={handleSignup} className="space-y-4">

              {/* Name */}
              <div>

                <label className="mb-2 block text-sm text-gray-300">
                  Full name
                </label>

                <div className="relative">

                  <User
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                  />

                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full rounded-xl border border-gray-700 bg-[#17191d] py-3 pl-10 pr-4 text-sm outline-none focus:border-red-500"
                  />

                </div>

              </div>

              {/* Email */}
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
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-gray-700 bg-[#17191d] py-3 pl-10 pr-4 text-sm outline-none focus:border-red-500"
                  />

                </div>

              </div>

              {/* Password */}
              <div>

                <label className="mb-2 block text-sm text-gray-300">
                  Password
                </label>

                <div className="relative">

                  <Lock
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                  />

                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    placeholder="Create password"
                    className="w-full rounded-xl border border-gray-700 bg-[#17191d] py-3 pl-10 pr-11 text-sm outline-none focus:border-red-500"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                  >
                    {showPassword ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>

                </div>

              </div>

              {/* Confirm */}
              <div>

                <label className="mb-2 block text-sm text-gray-300">
                  Confirm password
                </label>

                <div className="relative">

                  <Lock
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                  />

                  <input
                    type={showConfirm ? "text" : "password"}
                    name="confirmPassword"
                    value={form.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm password"
                    className="w-full rounded-xl border border-gray-700 bg-[#17191d] py-3 pl-10 pr-11 text-sm outline-none focus:border-red-500"
                  />

                  <button
                    type="button"
                    onClick={() => setShowConfirm(!showConfirm)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                  >
                    {showConfirm ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>

                </div>

              </div>

              {/* Terms */}
              <div className="flex gap-2">

                <input
                  type="checkbox"
                  required
                  className="mt-1 accent-red-500"
                />

                <p className="text-xs text-gray-400">
                  I agree to the DevOpsHub terms and privacy policy.
                </p>

              </div>

              {/* Button */}
              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-red-600 py-3 font-semibold hover:bg-red-500"
              >
                Create Account
                <ArrowRight size={18} />
              </motion.button>

            </form>

            {/* Divider */}
            <div className="my-5 flex items-center gap-3">

              <div className="h-px flex-1 bg-gray-700" />

              <span className="text-xs text-gray-500">
                OR
              </span>

              <div className="h-px flex-1 bg-gray-700" />

            </div>

            {/* Google / GitHub */}
            <div className="grid grid-cols-2 gap-3">

              <button
                onClick={() =>
                  alert("Google authentication will be connected to the backend.")
                }
                className="rounded-xl border border-gray-700 bg-[#17191d] py-3 text-sm hover:border-red-500/50"
              >
                <b>G</b> Google
              </button>

              <button
                onClick={() =>
                  alert("GitHub authentication will be connected to the backend.")
                }
                className="flex items-center justify-center gap-2 rounded-xl border border-gray-700 bg-[#17191d] py-3 text-sm hover:border-red-500/50"
              >
                <Github size={17} />
                GitHub
              </button>

            </div>

            {/* Login */}
            <p className="mt-6 text-center text-sm text-gray-400">

              Already have an account?{" "}

              <Link
                to="/login"
                className="font-semibold text-red-500"
              >
                Sign in
              </Link>

            </p>

          </div>

        </motion.div>

      </div>

    </div>
  );
}

export default Signup;