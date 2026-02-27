// Controller for application-related operations
const Application = require("../models/Application");
const { validationResult } = require("express-validator");

// @desc    Get all applications with filtering
// @route   GET /api/applications
// @access  Public
exports.getApplications = async (req, res, next) => {
  try {
    const { jobId } = req.query;
    let filter = {};

    // Add job ID filter if provided
    if (jobId) {
      filter.job = jobId;
    }

    const applications = await Application.find(filter)
      .populate("job", "title company location")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: applications.length,
      data: applications,
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Get single application by ID
// @route   GET /api/applications/:id
// @access  Public
exports.getApplicationById = async (req, res, next) => {
  try {
    const application = await Application.findById(req.params.id).populate(
      "job",
      "title company location"
    );

    if (!application) {
      return res.status(404).json({
        success: false,
        error: "Application not found",
      });
    }

    res.status(200).json({
      success: true,
      data: application,
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Create an application
// @route   POST /api/applications
// @access  Public
exports.createApplication = async (req, res, next) => {
  try {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        error: errors.array().map((e) => e.msg),
      });
    }

    const application = await Application.create(req.body);
    await application.populate("job", "title company location");

    res.status(201).json({
      success: true,
      data: application,
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Delete an application
// @route   DELETE /api/applications/:id
// @access  Public
exports.deleteApplication = async (req, res, next) => {
  try {
    const application = await Application.findByIdAndDelete(req.params.id);

    if (!application) {
      return res.status(404).json({
        success: false,
        error: "Application not found",
      });
    }

    res.status(200).json({
      success: true,
      data: application,
      message: "Application deleted successfully",
    });
  } catch (err) {
    next(err);
  }
};
