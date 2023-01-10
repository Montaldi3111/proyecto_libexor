const express = require("express");
const router = express.Router();
const userController = require("../controllers/users");
router.get("/login-register", userController.loginRegister)

module.exports = router;