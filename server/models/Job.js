const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Job title is required"],
      trim: true,
      maxlength: [100, "Title cannot exceed 100 characters"],
    },
    company: {
      type: String,
      required: [true, "Company name is required"],
      trim: true,
    },
    companyLogo: {
      type: String,
      default: "",
    },
    location: {
      type: String,
      required: [true, "Location is required"],
      trim: true,
    },
    category: {
      type: String,
      required: [true, "Category is required"],
      enum: [
        "Design",
        "Sales",
        "Marketing",
        "Finance",
        "Technology",
        "Engineering",
        "Business",
        "Human Resource",
        "Other",
      ],
    },
    type: {
      type: String,
      enum: ["Full Time", "Part Time", "Remote", "Contract", "Internship"],
      default: "Full Time",
    },
    description: {
      type: String,
      required: [true, "Job description is required"],
    },
    requirements: {
      type: String,
      default: "",
    },
    salary: {
      type: String,
      default: "",
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

// Index for search and filter performance
jobSchema.index({ title: "text", company: "text", description: "text" });
jobSchema.index({ category: 1, location: 1 });

module.exports = mongoose.model("Job", jobSchema);
