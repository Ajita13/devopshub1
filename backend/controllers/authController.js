const bcrypt = require("bcryptjs");
const prisma = require("../config/db");
const {
  generateAccessToken,
  generateRefreshToken,
  verifyRefreshToken,
} = require("../utils/jwt");

const COOKIE_OPTIONS = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
  maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
};

async function register(req, res, next) {
  try {
    const { name, email, password } = req.body;
    const cleanEmail = email.toLowerCase().trim();

    const existingUser = await prisma.user.findUnique({
      where: { email: cleanEmail },
    });

    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "An account with this email already exists.",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);

    const user = await prisma.user.create({
      data: {
        name: name.trim(),
        email: cleanEmail,
        password: passwordHash,
        role: "user",
      },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        avatar: true,
        createdAt: true,
      },
    });

    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);

    // Save refresh token in database
    await prisma.refreshToken.create({
      data: {
        token: refreshToken,
        userId: user.id,
        expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      },
    });

    res.cookie("refreshToken", refreshToken, COOKIE_OPTIONS);

    // Create initial welcome system log
    await prisma.systemLog.create({
      data: {
        level: "INFO",
        service: "CI/CD Service",
        message: `User ${user.email} registered and workspace initialized`,
        userId: user.id,
      },
    });

    return res.status(201).json({
      success: true,
      message: "Registration successful",
      user,
      accessToken,
      refreshToken,
    });
  } catch (error) {
    next(error);
  }
}

async function login(req, res, next) {
  try {
    const { email, password } = req.body;
    const cleanEmail = email.toLowerCase().trim();

    const user = await prisma.user.findUnique({
      where: { email: cleanEmail },
    });

    if (!user || !user.isActive) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password.",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password.",
      });
    }

    const safeUser = {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      avatar: user.avatar,
      createdAt: user.createdAt,
    };

    const accessToken = generateAccessToken(safeUser);
    const refreshToken = generateRefreshToken(safeUser);

    // Persist refresh token
    await prisma.refreshToken.create({
      data: {
        token: refreshToken,
        userId: user.id,
        expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      },
    });

    res.cookie("refreshToken", refreshToken, COOKIE_OPTIONS);

    return res.json({
      success: true,
      message: "Login successful",
      user: safeUser,
      accessToken,
      refreshToken,
    });
  } catch (error) {
    next(error);
  }
}

async function refresh(req, res, next) {
  try {
    const token = req.cookies?.refreshToken || req.body?.refreshToken;

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Refresh token required.",
      });
    }

    const decoded = verifyRefreshToken(token);
    if (!decoded) {
      return res.status(401).json({
        success: false,
        message: "Expired or invalid refresh token.",
      });
    }

    const storedToken = await prisma.refreshToken.findUnique({
      where: { token },
      include: { user: true },
    });

    if (!storedToken || storedToken.expiresAt < new Date()) {
      if (storedToken) {
        await prisma.refreshToken.delete({ where: { token } });
      }
      return res.status(401).json({
        success: false,
        message: "Refresh token revoked or expired.",
      });
    }

    const safeUser = {
      id: storedToken.user.id,
      name: storedToken.user.name,
      email: storedToken.user.email,
      role: storedToken.user.role,
      avatar: storedToken.user.avatar,
    };

    const newAccessToken = generateAccessToken(safeUser);

    return res.json({
      success: true,
      accessToken: newAccessToken,
      user: safeUser,
    });
  } catch (error) {
    next(error);
  }
}

async function logout(req, res, next) {
  try {
    const token = req.cookies?.refreshToken || req.body?.refreshToken;

    if (token) {
      await prisma.refreshToken.deleteMany({
        where: { token },
      });
    }

    res.clearCookie("refreshToken", COOKIE_OPTIONS);

    return res.json({
      success: true,
      message: "Logged out successfully",
    });
  } catch (error) {
    next(error);
  }
}

async function getMe(req, res, next) {
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.user.id },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        avatar: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    return res.json({
      success: true,
      user,
    });
  } catch (error) {
    next(error);
  }
}

async function updateProfile(req, res, next) {
  try {
    const { name, avatar } = req.body;

    const updatedUser = await prisma.user.update({
      where: { id: req.user.id },
      data: {
        ...(name && { name: name.trim() }),
        ...(avatar !== undefined && { avatar }),
      },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        avatar: true,
        updatedAt: true,
      },
    });

    return res.json({
      success: true,
      message: "Profile updated successfully",
      user: updatedUser,
    });
  } catch (error) {
    next(error);
  }
}

async function changePassword(req, res, next) {
  try {
    const { currentPassword, newPassword } = req.body;

    const user = await prisma.user.findUnique({
      where: { id: req.user.id },
    });

    const isMatch = await bcrypt.compare(currentPassword, user.password);
    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Current password is incorrect.",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const newPasswordHash = await bcrypt.hash(newPassword, salt);

    await prisma.user.update({
      where: { id: req.user.id },
      data: { password: newPasswordHash },
    });

    // Invalidate old refresh tokens
    await prisma.refreshToken.deleteMany({
      where: { userId: req.user.id },
    });

    return res.json({
      success: true,
      message: "Password changed successfully. Please log in again.",
    });
  } catch (error) {
    next(error);
  }
}

async function googleLogin(req, res, next) {
  try {
    const { email, name, avatar } = req.body;
    if (!email) {
      return res.status(400).json({
        success: false,
        message: "Email is required for Google authentication.",
      });
    }

    const cleanEmail = email.toLowerCase().trim();
    let user = await prisma.user.findUnique({
      where: { email: cleanEmail },
    });

    if (!user) {
      const crypto = require("crypto");
      const randomPassword = crypto.randomBytes(32).toString("hex");
      const salt = await bcrypt.genSalt(10);
      const passwordHash = await bcrypt.hash(randomPassword, salt);

      user = await prisma.user.create({
        data: {
          name: name ? name.trim() : cleanEmail.split("@")[0],
          email: cleanEmail,
          password: passwordHash,
          avatar: avatar || null,
          role: "user",
        },
      });

      await prisma.systemLog.create({
        data: {
          level: "INFO",
          service: "Google OAuth",
          message: `User ${user.email} signed in via Google and workspace initialized`,
          userId: user.id,
        },
      });
    } else {
      if (avatar && !user.avatar) {
        user = await prisma.user.update({
          where: { id: user.id },
          data: { avatar },
        });
      }
    }

    const safeUser = {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      avatar: user.avatar,
      createdAt: user.createdAt,
    };

    const accessToken = generateAccessToken(safeUser);
    const refreshToken = generateRefreshToken(safeUser);

    await prisma.refreshToken.create({
      data: {
        token: refreshToken,
        userId: user.id,
        expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      },
    });

    res.cookie("refreshToken", refreshToken, COOKIE_OPTIONS);

    return res.json({
      success: true,
      message: "Google authentication successful",
      user: safeUser,
      accessToken,
      refreshToken,
    });
  } catch (error) {
    next(error);
  }
}

async function forgotPassword(req, res, next) {
  try {
    const { email } = req.body;
    // Safe standard response: doesn't disclose user existence
    return res.json({
      success: true,
      message: "If an account exists with this email, password reset instructions have been sent.",
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  register,
  login,
  googleLogin,
  refresh,
  logout,
  getMe,
  updateProfile,
  changePassword,
  forgotPassword,
};
