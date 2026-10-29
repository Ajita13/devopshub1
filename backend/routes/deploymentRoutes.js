const express = require("express");
const { authenticate } = require("../middleware/auth");
const {
  getDeployments,
  getDeployment,
  createDeployment,
} = require("../controllers/deploymentController");

const router = express.Router();

router.use(authenticate);

router.get("/", getDeployments);
router.get("/:id", getDeployment);
router.post("/", createDeployment);

module.exports = router;
