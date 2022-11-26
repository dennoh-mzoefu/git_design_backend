const mongoose = require("mongoose");

// user schema

const differenceSchema = new mongoose.Schema({
  thumbnailUrl: {
    type: String,
  },

  fileName: {
    type: String,
  },

  date: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Difference", differenceSchema);
