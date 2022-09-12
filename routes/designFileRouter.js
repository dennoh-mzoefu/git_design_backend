const router = require("express").Router();
const designFileController = require("../controllers/designFileController.js");
router.post("/", designFileController.createFigmaFile);
router.get("/:id", designFileController.getDesignFile);
router.get("/", designFileController.getDesignFiles);

module.exports = router;
