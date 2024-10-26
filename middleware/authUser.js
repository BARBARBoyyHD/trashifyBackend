require("dotenv").config();
const jwt = require("jsonwebtoken");

const authenticateUser  = async (req, res, next) => {
  const token = req.cookies.accessToken;

  // Check if the token is present
  if (!token) {
    return res.status(403).json({
      message: "Access denied: No token provided",
    });
  }

  try {
    // Verify the token using the correct environment variable
    const verified = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    req.user = verified; // Attach the user information to the request object

    next(); // Proceed to the next middleware or route handler
  } catch (error) {
    console.error("Token verification failed:", error); // Log the error for debugging
    return res.status(401).json({
      message: "Invalid token",
    });
  }
};

module.exports = authenticateUser ;