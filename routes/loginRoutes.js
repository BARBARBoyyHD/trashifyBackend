const loginController = require("../controller/loginController");
const express = require("express");
const router = express.Router();

router.post("/api/login",loginController.login)

module.exports = router