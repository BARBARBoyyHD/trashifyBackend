const express = require("express");
const router = express.Router();
const cookieParser = require("cookie-parser");
const deleteCookiesController = require("../controller/deleteCookiesController");
const authUser = require("../middleware/authUser");

router.delete("/api/deleteCookies", deleteCookiesController.delete,authUser);

module.exports = router