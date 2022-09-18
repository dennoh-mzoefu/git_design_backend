const mongoose = require("mongoose");

// user schema

const designFileSchema = new mongoose.Schema({
  figmaApiKey: {
    type: String,

    min: 2,
    max: 255,
  },
  ownerName: {
    type: String,
    min: 2,
    max: 255,
  },
  figmaId: {
    type: String,
    min: 2,
    max: 255,
  },
  fileUrl: {
    type: String,

    min: 2,
    max: 255,
  },
  fileName: {
    type: String,

    min: 2,
    max: 255,
  },
  projectName: {
    type: String,
    min: 2,
    max: 255,
  },
  thumbnailUrl: {
    type: String,

    min: 5,
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
