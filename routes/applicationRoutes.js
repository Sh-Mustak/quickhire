const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const {
  getApplications,
  getApplicationById,
  createApplication,
  deleteApplication,
} = require("../controllers/applicationController");

// Validation middleware
const validateApplication = [
  check("job").notEmpty().withMessage("Job ID is required"),
  check("applicantName")
    .notEmpty()
    .withMessage("Applicant name is required")
    .isLength({ min: 2 })
    .withMessage("Name must be at least 2 characters"),
  check("applicantEmail")
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Please provide a valid email"),
  check("resumeUrl")
    .optional()
    .isURL()
    .withMessage("Resume URL must be a valid URL"),
];

router
  .route("/")
  .get(getApplications)
  .post(validateApplication, createApplication);
router.route("/:id").get(getApplicationById).delete(deleteApplication);

module.exports = router;
