const { model, Schema } = require("mongoose");
const Chat = new Schema({
  author: {
    type: String,
  },
  time: {
    type: String,
  },
  room: {
    type: String,
  },
  message: {
    type: String,
  },
});
// const Notification = new Schema({
//   sender: String,
//   receiver: String,
//   message: String,
//   isSent: String,

// });
module.exports = model("Chat", Chat);

// module.exports = model("Notification", Notification);
