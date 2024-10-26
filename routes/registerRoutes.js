const registerController = require("../controller/registerController")
const express = require("express")
const router = express.Router()

router.post("/api/register",registerController.register)

module.exports = router