const express = require("express");
const { body } = require("express-validator");
const router = express.Router();
const {
  submitApplication,
  getApplicationsByJob,
  getAllApplications,
} = require("../controllers/applicationController");
const validate = require("../middleware/validate");

const applicationValidation = [
  body("jobId").notEmpty().withMessage("Job ID is required"),
  body("name").trim().notEmpty().withMessage("Name is required"),
  body("email").isEmail().withMessage("Valid email is required").normalizeEmail(),
  body("resumeLink").isURL().withMessage("Resume link must be a valid URL"),
  body("coverNote").optional().isLength({ max: 2000 }).withMessage("Cover note cannot exceed 2000 characters"),
];

router.post("/", validate(applicationValidation), submitApplication);
router.get("/", getAllApplications);
router.get("/job/:jobId", getApplicationsByJob);

module.exports = router;
