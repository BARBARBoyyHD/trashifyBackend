const express = require("express")
const router = express.Router()
const authUser = require("../middleware/authUser")

router.get("/api/authUser",authUser,(req,res)=>{
    res.status(200).json(req.user)
})

module.exports = router