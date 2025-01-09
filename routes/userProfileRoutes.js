const express = require("express")
const route = express.Router()
const userProfileController = require("../controller/userProfileController")
const authUser = require("../middleware/authUser")

route.get("/api/userProfile",userProfileController.getProfile,authUser)

module.exports = route