const express = require("express")
const route = express.Router()
const createBlogsController = require("../controller/createBlogsController")
const authuser = require("../middleware/authUser")

route.post("/api/createBlogs",createBlogsController.create,authuser)

module.exports = route