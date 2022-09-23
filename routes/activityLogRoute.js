const router = require("express").Router();
const activityLogController = require("../controllers/activityLogController.js");
// router.post("/create", designFileController.createFigmaFile);
// router.post("/:id", designFileController.updateDesignFile);
// router.get("/:id", designFileController.getDesignFile);
router.get("/", activityLogController.getActivityLogs);

module.exports = router;
