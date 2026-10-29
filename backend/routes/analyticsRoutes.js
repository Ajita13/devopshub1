const express = require("express");
const { authenticate } = require("../middleware/auth");
const { getAnalytics } = require("../controllers/analyticsController");

const router = express.Router();

router.use(authenticate);

router.get("/", getAnalytics);

module.exports = router;
