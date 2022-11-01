const mongoose = require("mongoose");

// user schema

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 2,
    max: 255,
  },
  profilePic: {
    type: String,
    required: true,
    min: 2,
    max: 255,
  },
  email: {
    type: String,
    required: true,
    min: 5,
    max: 255,
  },
  description: {
    type: String,
    required: true,
    min: 1,
    max: 255,
    default: "",
  },
  password: {
    type: String,
    required: true,
    min: 8,
    // max: 1024,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("User", userSchema);
