const express = require("express");
const router = express.Router();
const userApiController = require("../../controllers/api/user");
router.get("/allUsers", userApiController.all);
router.get("/lastUser", userApiController.last);
router.get("/users/:id", userApiController.show)

module.exports = router