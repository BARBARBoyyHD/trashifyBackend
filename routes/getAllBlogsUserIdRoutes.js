const express = require("express")
const route = express.Router()
const getAllBlogsUserIdController = require("../controller/getAllBlogsUserIdController")
const authUser = require("../middleware/authUser")

route.get("/api/getAllBlogsUserId/:user_id",getAllBlogsUserIdController.getAllBlogsUserID,authUser)

module.exports = route