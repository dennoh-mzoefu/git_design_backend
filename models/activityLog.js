const mongoose = require("mongoose");

// user schema

const activityLogSchema = new mongoose.Schema({
  Subject: {
    type: String,

    min: 2,
    max: 255,
  },
  ownerName: {
    type: String,

    min: 2,
    max: 255,
  },
  fileName: {
    type: String,

    min: 2,
    max: 255,
  },
  StartTime: {
    type: String,

    min: 5,
    max: 255,
  },
  CategoryColor: {
    type: String,

    min: 1,
    max: 255,
    default: "f57f17",
  },
});

module.exports = mongoose.model("ActivityLog", activityLogSchema);
