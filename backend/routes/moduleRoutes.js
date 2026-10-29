const express = require("express");
const { authenticate } = require("../middleware/auth");
const { getModuleData, createModuleItem } = require("../controllers/moduleController");

const router = express.Router();

router.use(authenticate);

router.get("/:type", getModuleData);
router.post("/:type", createModuleItem);

module.exports = router;
