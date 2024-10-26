const express = require("express");
const router = express.Router();
const refreshTokenController = require("../controller/refreshTokenController");

router.post("/api/refreshToken", refreshTokenController.refreshToken);

module.exports = router;
