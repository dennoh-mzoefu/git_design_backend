const router = require("express").Router();
const projectController = require("../controllers/collabProjectController.js");

router.get("/:projectMember", projectController.getCollabProjects);
router.get("/view/:projectName", projectController.getCollabProject);
// router.post("/:id", projectController.updateProject);
// router.post("/", projectController.createProject);
// router.delete("/:id", projectController.deleteProject);

module.exports = router;
