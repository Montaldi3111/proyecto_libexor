const express = require("express");
const router = express.Router();
const userController = require("../controllers/users");


router.get("/login-register", userController.loginRegister);
router.get("/profile", userController.profile);

router.post("/access", userController.access);
router.post("/create", userController.create);
// router.post("/edit", userController.edit);
// router.post("/delete", userController.delete);

module.exports = router;