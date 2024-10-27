const express = require("express")
const route = express.Router()
const getSingleBlogsController = require("../controller/getSingleBlogsController")

route.get("/api/getSingleBlogs/:blogs_id",getSingleBlogsController.getSingleBlogs)

module.exports = route