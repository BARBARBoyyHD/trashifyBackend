const express = require("express")
const route = express.Router()
const getSingleBlogsController = require("../controller/getSingleBlogsController")
const authUser = require("../middleware/authUser")

route.get("/api/getSingleBlogs/:blogs_id",getSingleBlogsController.getSingleBlogs,authUser)

module.exports = route