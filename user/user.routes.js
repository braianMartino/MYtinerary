const router = require("express").Router();
const userController = require("./user.controller");


router.get("/users", userController.getUsers);
router.post("/user", userController.createUser);

module.exports = router;
