require("dotenv").config();
const jwt = require("jsonwebtoken");
const validateRefreshToken = async (req, res, next) => {
  try {
    const refreshToken = req.cookies.refreshToken;

    if (!refreshToken) {
      return res.status(403).json({
        message: "Access denied: No token provided",
      });
    }
    const verified = jwt.sign(refreshToken, process.env.REFRESH_TOKEN_SECRET);
    req.user = verified;
    next();
  } catch (error) {
    console.error("Token verification failed:", error); // Log the error for debugging
    return res.status(401).json({
      message: "Invalid token",
    });
  }
};

module.exports = validateRefreshToken;
