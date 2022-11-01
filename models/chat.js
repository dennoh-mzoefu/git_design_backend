const { model, Schema } = require("mongoose");
const Chat = new Schema({
  _id: String,
  author: String,
  time: String,
  room: String,
  message: String,
});
const Notification = new Schema({
  sender: String,
  receiver: String,
  message: String,
  isSent: String,
 
});
module.exports = model("Chat", Chat);

  module.exports = model("Notification", Notification);