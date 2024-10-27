const express = require("express")
const route = express.Router()
const getAllBlogsController = require("../controller/getAllBlogsController")
const authUser = require("../middleware/authUser")

route.get("/api/getAllBlogs",getAllBlogsController.getBlogs,authUser)

module.exports = route
