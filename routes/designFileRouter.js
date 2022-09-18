const router = require("express").Router();
const designFileController = require("../controllers/designFileController.js");
router.post("/create", designFileController.createFigmaFile);
router.post("/:id", designFileController.updateDesignFile);
router.get("/:id", designFileController.getDesignFile);
router.get("/", designFileController.getDesignFiles);

module.exports = router;
