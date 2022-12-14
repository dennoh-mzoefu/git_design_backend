const router = require("express").Router();
const projectController = require("../controllers/projectController.js");

router.get("/:ownerName", projectController.getProjects);
router.get("/view/:projectName", projectController.getProject);
router.post("/:id", projectController.updateProject);
router.post("/", projectController.createProject);
router.delete("/:id", projectController.deleteProject);

module.exports = router;
