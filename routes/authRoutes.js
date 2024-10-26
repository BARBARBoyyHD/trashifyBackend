const express = require("express")
const router = express.Router()
const authUser = require("../middleware/authUser")

router.get("/api/authUser",authUser)

module.exports = router