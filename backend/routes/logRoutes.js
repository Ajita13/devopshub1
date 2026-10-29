const express = require("express");
const { authenticate } = require("../middleware/auth");
const { getLogs, createLog } = require("../controllers/logController");

const router = express.Router();

router.use(authenticate);

router.get("/", getLogs);
router.post("/", createLog);

module.exports = router;
