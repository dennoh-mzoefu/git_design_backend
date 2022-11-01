const router = require("express").Router();
const chatController = require("../controllers/chatController.js");
// router.get("/", chatController.getAllChats);
router.post("/chatSave", chatController.chatSave);
router.get("/", chatController.getAllChats);
router.get(
  "/senderNotification",
  chatController.getAgetNotificationSenderllChats
);
router.get("/receiverNotification", chatController.getNotificationReceiver);
router.post("/createNotification", chatController.createNotification);

module.exports = router;
