const Job = require("../models/Job");

// @desc    Get all jobs (with search & filter)
// @route   GET /api/jobs
// @access  Public
const getJobs = async (req, res) => {
  try {
    const { search, category, location, type, page = 1, limit = 10 } = req.query;

    const query = { isActive: true };

    // Full-text search
    if (search) {
      query.$text = { $search: search };
    }

    // Filters
    if (category) query.category = category;
    if (location) query.location = new RegExp(location, "i");
    if (type) query.type = type;

    const skip = (Number(page) - 1) * Number(limit);

    const [jobs, total] = await Promise.all([
      Job.find(query)
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(Number(limit))
        .select("-__v"),
      Job.countDocuments(query),
    ]);

    res.status(200).json({
      success: true,
      count: jobs.length,
      total,
      totalPages: Math.ceil(total / Number(limit)),
      currentPage: Number(page),
      data: jobs,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
};

// @desc    Get single job
// @route   GET /api/jobs/:id
// @access  Public
const getJobById = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id).select("-__v");

    if (!job || !job.isActive) {
      return res.status(404).json({ success: false, message: "Job not found" });
    }

    res.status(200).json({ success: true, data: job });
  } catch (error) {
    if (error.name === "CastError") {
      return res.status(404).json({ success: false, message: "Job not found" });
    }
    res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
};

// @desc    Create a new job
// @route   POST /api/jobs
// @access  Admin
const createJob = async (req, res) => {
  try {
    const job = await Job.create(req.body);
    res.status(201).json({ success: true, message: "Job created successfully", data: job });
  } catch (error) {
    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map((e) => e.message);
      return res.status(400).json({ success: false, message: messages.join(", ") });
    }
    res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
};

// @desc    Update a job
// @route   PUT /api/jobs/:id
// @access  Admin
const updateJob = async (req, res) => {
  try {
    const job = await Job.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    }).select("-__v");

    if (!job) {
      return res.status(404).json({ success: false, message: "Job not found" });
    }

    res.status(200).json({ success: true, message: "Job updated successfully", data: job });
  } catch (error) {
    if (error.name === "CastError") {
      return res.status(404).json({ success: false, message: "Job not found" });
    }
    res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
};

// @desc    Delete a job (soft delete)
// @route   DELETE /api/jobs/:id
// @access  Admin
const deleteJob = async (req, res) => {
  try {
    const job = await Job.findByIdAndUpdate(
      req.params.id,
      { isActive: false },
      { new: true }
    );

    if (!job) {
      return res.status(404).json({ success: false, message: "Job not found" });
    }

    res.status(200).json({ success: true, message: "Job deleted successfully" });
  } catch (error) {
    if (error.name === "CastError") {
      return res.status(404).json({ success: false, message: "Job not found" });
    }
    res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
};

// @desc    Get all job categories with counts
// @route   GET /api/jobs/categories
// @access  Public
const getCategories = async (req, res) => {
  try {
    const categories = await Job.aggregate([
      { $match: { isActive: true } },
      { $group: { _id: "$category", count: { $sum: 1 } } },
      { $sort: { count: -1 } },
    ]);

    res.status(200).json({ success: true, data: categories });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
};

module.exports = { getJobs, getJobById, createJob, updateJob, deleteJob, getCategories };
