const router = require("express").Router();
const chatController = require("../controllers/chatController.js");
// router.get("/", chatController.getAllChats);
router.post("/chatSave", chatController.chatSave);
router.get("/", chatController.getAllChats);

module.exports = router;
