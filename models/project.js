const mongoose = require("mongoose");

// user schema

const projectSchema = new mongoose.Schema({
  ownerName: {
    type: String,
    required: true,
    min: 2,
    max: 255,
  },
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
  fileNames: [String],
  projectMembers:[String] ,
  date: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Project", projectSchema);
