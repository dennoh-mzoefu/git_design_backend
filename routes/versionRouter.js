const router = require("express").Router();
const versionController = require("../controllers/versionController.js");

router.get("/:designFile", versionController.getVersions);
router.get("/:version", versionController.getVersion);
router.post("/:id", versionController.updateVersion);
router.post("/", versionController.createVersion);
router.delete("/:id", versionController.deleteVersion);

module.exports = router;
