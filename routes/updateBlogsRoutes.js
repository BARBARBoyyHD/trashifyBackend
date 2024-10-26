const express = require("express")
const router = express.Router()
const updateBlogsController = require("../controller/updateBlogsController")

router.put("/api/updateBlogs/:blogs_id",updateBlogsController.update)

module.exports = router