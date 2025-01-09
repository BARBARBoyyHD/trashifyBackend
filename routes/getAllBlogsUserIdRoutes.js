const express = require("express")
const route = express.Router()
const getAllBlogsUserIdController = require("../controller/getAllBlogsUserIdController")
const authUser = require("../middleware/authUser")

route.get("/api/getAllBlogsUserID",getAllBlogsUserIdController.getAllBlogsUserID,authUser)

module.exports = route