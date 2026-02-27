const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please add a job title"],
  },
  description: {
    type: String,
    required: [true, "Please add a description"],
  },
  category: {
    type: String,
    enum: [
      "Technology",
      "Finance",
      "Healthcare",
      "Education",
      "Sales",
      "Marketing",
      "Other",
    ],
    required: [true, "Please select a job category"],
  },
  location: String,
  company: String,
  salary: Number,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Job", JobSchema);
