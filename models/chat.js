const { model, Schema } = require("mongoose");
const Chat = new Schema({
  _id: String,
  author: String,
  time: String,
  room: String,
  message: String,
});
module.exports = model("Chat", Chat);
