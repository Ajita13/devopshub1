const express = require("express");
const { authenticate } = require("../middleware/auth");
const {
  getBuilds,
  getBuild,
  cancelBuild,
} = require("../controllers/buildController");

const router = express.Router();

router.use(authenticate);

router.get("/", getBuilds);
router.get("/:id", getBuild);
router.post("/:id/cancel", cancelBuild);

module.exports = router;
