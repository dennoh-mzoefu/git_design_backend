const { model, Schema } = require("mongoose");
const Document = new Schema({
  _id: String,
  author: String,
  time: String,
  message: String,
});
module.exports = model("Document", Document);
