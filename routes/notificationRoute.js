const router = require("express").Router();
const notificationController = require("../controllers/notificationCotrollers.js");

router.post("/", notificationController.createNotification);
// router.get("/", notificationController.getAllChats);
router.post("/notify", notificationController.getNotifications);
router.post("/accept", notificationController.acceptNotifications);

module.exports = router;
