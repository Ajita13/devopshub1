const express = require("express");
const { z } = require("zod");
const validate = require("../middleware/validate");
const { authenticate } = require("../middleware/auth");
const {
  getPipelines,
  getPipeline,
  createPipeline,
  updatePipeline,
  deletePipeline,
  runPipeline,
} = require("../controllers/pipelineController");

const router = express.Router();

router.use(authenticate);

const createPipelineSchema = z.object({
  body: z.object({
    name: z.string().min(1, "Pipeline name is required"),
    repository: z.string().optional(),
    branch: z.string().default("main"),
    environment: z.string().default("Development"),
  }),
});

const updatePipelineSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    repository: z.string().optional(),
    branch: z.string().optional(),
    environment: z.string().optional(),
    status: z.string().optional(),
  }),
});

router.get("/", getPipelines);
router.post("/", validate(createPipelineSchema), createPipeline);
router.get("/:id", getPipeline);
router.put("/:id", validate(updatePipelineSchema), updatePipeline);
router.delete("/:id", deletePipeline);
router.post("/:id/run", runPipeline);

module.exports = router;
