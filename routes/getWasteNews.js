const express = require("express")
const route = express.Router()
const getWasteNews = require("../controller/getWasteNews")

route.get("/api/news/waste/management",getWasteNews.getWaste)

module.exports = route