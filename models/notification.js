const mongoose = require("mongoose");

// user schema

const notificationSchema = new mongoose.Schema({
  message: {
    type: String,

    min: 2,
    max: 255,
  },
  projectName: {
    type: String,

    min: 2,
    max: 255,
  },
  receiver: {
    type: String,
    min: 2,
    max: 255,
  },
  sender: {
    type: String,
    min: 2,
    max: 255,
  },
  link: {
    type: String,
    min: 2,
    max: 255,
  },
  date: {
    type: String,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Notification", notificationSchema);
