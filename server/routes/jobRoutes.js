const express = require("express");
const { body, param } = require("express-validator");
const router = express.Router();
const {
  getJobs,
  getJobById,
  createJob,
  updateJob,
  deleteJob,
  getCategories,
} = require("../controllers/jobController");
const validate = require("../middleware/validate");

const createJobValidation = [
  body("title").trim().notEmpty().withMessage("Title is required"),
  body("company").trim().notEmpty().withMessage("Company is required"),
  body("location").trim().notEmpty().withMessage("Location is required"),
  body("category")
    .isIn(["Design","Sales","Marketing","Finance","Technology","Engineering","Business","Human Resource","Other"])
    .withMessage("Invalid category"),
  body("type")
    .optional()
    .isIn(["Full Time","Part Time","Remote","Contract","Internship"])
    .withMessage("Invalid job type"),
  body("description").trim().notEmpty().withMessage("Description is required"),
];

// Public routes
router.get("/categories", getCategories);
router.get("/", getJobs);
router.get("/:id", getJobById);

// Admin routes
router.post("/", validate(createJobValidation), createJob);
router.put("/:id", validate(createJobValidation), updateJob);
router.delete("/:id", deleteJob);

module.exports = router;
