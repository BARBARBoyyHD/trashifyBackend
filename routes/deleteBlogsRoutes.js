const express = require("express")
const route = express.Router()
const deleteBlogsController = require("../controller/deleteBlogsController")
const authUser = require("../middleware/authUser")

route.delete("/api/deleteBlogs",authUser,deleteBlogsController.delete)

module.exports = route