const express = require("express")
const router = express.Router()
const updateBlogsController = require("../controller/updateBlogsController")
const authuser = require("../middleware/authUser")

router.put("/api/updateBlogs/:blogs_id",updateBlogsController.update,authuser)

module.exports = router