const mongoose = require("mongoose");

// user schema

const designFileSchema = new mongoose.Schema({
  fileUrl: {
    type: String,
    required: true,
    min: 2,
    max: 255,
  },
  thumbnailUrl: {
    type: String,
    required: true,
    min: 5,
    max: 255,
  },
  lastModified: {
    type: String,
    min: 5,
    max: 255,
  },
  viewersIds: {
    type: [String],

    min: 5,
    max: 255,
    default: [],
  },
  description: {
    type: String,
    required: true,
    min: 1,
    max: 255,
    default: "",
  },
  comments: {
    type: String,
    min: 8,
    default: "",
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("DesignFile", designFileSchema);
