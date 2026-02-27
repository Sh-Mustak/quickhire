const mongoose = require("mongoose");

const ApplicationSchema = new mongoose.Schema({
  job: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Job",
    required: true,
  },
  applicantName: {
    type: String,
    required: [true, "Please add applicant name"],
  },
  applicantEmail: {
    type: String,
    required: [true, "Please add applicant email"],
  },
  resumeUrl: String,
  coverLetter: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Application", ApplicationSchema);
