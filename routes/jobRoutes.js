const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const {
  getJobs,
  getJobById,
  createJob,
  deleteJob,
} = require("../controllers/jobController");

// Validation middleware
const validateJob = [
  check("title").notEmpty().withMessage("Job title is required"),
  check("description").notEmpty().withMessage("Job description is required"),
  check("category")
    .notEmpty()
    .withMessage("Job category is required")
    .isIn([
      "Technology",
      "Finance",
      "Healthcare",
      "Education",
      "Sales",
      "Marketing",
      "Other",
    ])
    .withMessage("Invalid job category"),
  check("company").notEmpty().withMessage("Company name is required"),
  check("location").notEmpty().withMessage("Job location is required"),
];

router.route("/").get(getJobs).post(validateJob, createJob);
router.route("/:id").get(getJobById).delete(deleteJob);

module.exports = router;
