const router = require("express").Router();
const activityLogController = require("../controllers/activityLogController.js");
router.post("/", activityLogController.saveActivityLog);

router.get("/", activityLogController.getActivityLogs);

module.exports = router;
