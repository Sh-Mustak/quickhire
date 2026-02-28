const Application = require("../models/Application");
const Job = require("../models/Job");

// @desc    Submit a job application
// @route   POST /api/applications
// @access  Public
const submitApplication = async (req, res) => {
  try {
    const { jobId, name, email, resumeLink, coverNote } = req.body;

    const job = await Job.findById(jobId);
    if (!job || !job.isActive) {
      return res.status(404).json({ success: false, message: "Job not found or no longer active" });
    }

    const application = await Application.create({
      job: jobId,
      name,
      email,
      resumeLink,
      coverNote,
    });

    res.status(201).json({
      success: true,
      message: "Application submitted successfully",
      data: application,
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(409).json({
        success: false,
        message: "You have already applied for this job with this email",
      });
    }
    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map((e) => e.message);
      return res.status(400).json({ success: false, message: messages.join(", ") });
    }
    res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
};

const getApplicationsByJob = async (req, res) => {
  try {
    const applications = await Application.find({ job: req.params.jobId })
      .populate("job", "title company location")
      .sort({ createdAt: -1 })
      .select("-__v");

    res.status(200).json({ success: true, count: applications.length, data: applications });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
};

const getAllApplications = async (req, res) => {
  try {
    const applications = await Application.find()
      .populate("job", "title company location category")
      .sort({ createdAt: -1 })
      .select("-__v");

    res.status(200).json({ success: true, count: applications.length, data: applications });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
};

module.exports = { submitApplication, getApplicationsByJob, getAllApplications };
