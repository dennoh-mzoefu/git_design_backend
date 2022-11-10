const router = require("express").Router();
const notificationController = require("../controllers/notificationCotrollers.js");

router.post("/", notificationController.createNotification);
// router.get("/", notificationController.getAllChats);
router.get("/notify/:receiver", notificationController.getNotifications);
router.post("/accept", notificationController.acceptNotifications);

module.exports = router;
