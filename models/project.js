const mongoose = require("mongoose");

// user schema

const projectSchema = new mongoose.Schema({
  projectName: {
    type: String,
    required: true,
    min: 2,
    max: 255,
  },
  description: {
    type: String,
    required: true,
    min: 1,
    max: 255,
    default: "",
  },
  fileNames: {
    type: String,
    required: true,
    min: 5,
    max: 255,
    default: "",
  },
  projectMembers: {
    name: {
      type: String,
      required: true,
      min: 8,
    },
    message: {
      type: String,
      required: true,
      min: 8,
    },
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Project", projectSchema);
