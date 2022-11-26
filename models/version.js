const mongoose = require("mongoose");

// user schema

const versionSchema = new mongoose.Schema({
  version: {
    type: String,
  },

  fileName: {
    type: String,
  },
  designFile: {
    type: String,
  },

  date: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Version", versionSchema);
