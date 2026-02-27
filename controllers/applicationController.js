// Controller for application-related operations
const Application = require("../models/Application");

// @desc    Get all applications
// @route   GET /api/applications
// @access  Public
exports.getApplications = async (req, res, next) => {
  try {
    const applications = await Application.find();
    res.status(200).json(applications);
  } catch (err) {
    next(err);
  }
};

// @desc    Create an application
// @route   POST /api/applications
// @access  Public
exports.createApplication = async (req, res, next) => {
  try {
    const application = await Application.create(req.body);
    res.status(201).json(application);
  } catch (err) {
    next(err);
  }
};
