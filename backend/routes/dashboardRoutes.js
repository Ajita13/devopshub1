const express = require("express");
const { authenticate } = require("../middleware/auth");
const { getDashboardStats } = require("../controllers/dashboardController");

const router = express.Router();

router.use(authenticate);

router.get("/stats", getDashboardStats);

module.exports = router;
