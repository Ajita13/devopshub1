const express = require("express");
const { z } = require("zod");
const validate = require("../middleware/validate");
const { authenticate } = require("../middleware/auth");
const {
  register,
  login,
  googleLogin,
  refresh,
  logout,
  getMe,
  updateProfile,
  changePassword,
  forgotPassword,
} = require("../controllers/authController");

const router = express.Router();

const googleSchema = z.object({
  body: z.object({
    email: z.string().email("Invalid email address"),
    name: z.string().optional().nullable(),
    avatar: z.string().optional().nullable(),
    uid: z.string().optional().nullable(),
  }),
});

const registerSchema = z.object({
  body: z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
  }),
});

const loginSchema = z.object({
  body: z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(1, "Password is required"),
  }),
});

const changePasswordSchema = z.object({
  body: z.object({
    currentPassword: z.string().min(1, "Current password is required"),
    newPassword: z.string().min(6, "New password must be at least 6 characters"),
  }),
});

const forgotPasswordSchema = z.object({
  body: z.object({
    email: z.string().email("Invalid email address"),
  }),
});

router.post("/register", validate(registerSchema), register);
router.post("/login", validate(loginSchema), login);
router.post("/google", validate(googleSchema), googleLogin);
router.post("/refresh", refresh);
router.post("/logout", logout);
router.post("/forgot-password", validate(forgotPasswordSchema), forgotPassword);

router.get("/me", authenticate, getMe);
router.put("/profile", authenticate, updateProfile);
router.put("/change-password", authenticate, validate(changePasswordSchema), changePassword);

module.exports = router;
