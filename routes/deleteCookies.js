const express = require("express");
const router = express.Router();
const cookieParser = require("cookie-parser");
const deleteCookiesController = require("../controller/deleteCookiesController");

router.delete("/api/deleteCookies", deleteCookiesController.delete);

module.exports = router