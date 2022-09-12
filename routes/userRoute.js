const router = require("express").Router();
const userController = require("../controllers/userControllers.js");
// router.get("/", userController.getAllUsers);
router.post("/register", userController.register);
router.post("/login", userController.login);
router.put("/:id", userController.updateUser);
router.get("/:name", userController.getOneUser);
router.get("/", userController.getAllUsers);

module.exports = router;
