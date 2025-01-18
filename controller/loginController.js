require("dotenv").config();
const db = require("../db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const generateAccessToken = (userId, username) => {
  return jwt.sign({ userId, user: username }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "30m",
  });
};

const generateRefreshToken = (userId, username) => {
  return jwt.sign(
    { userId, user: username },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn: "7d",
    }
  );
};

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Validate input
    if (!username || !password) {
      return res.status(400).json({
        message: "Invalid credentials",
      });
    }

    // Query to find the user
    const loginQuery = "SELECT * FROM users WHERE username = ?";
    const [result] = await db.query(loginQuery, [username]);

    // Check if the user exists
    if (!result.length) {
      return res.status(401).json({
        message: "Invalid username or password",
      });
    }

    // Get the user from the result
    const user = result[0];

    // Compare the password with the hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({
        message: "Invalid username or password",
      });
    }

    // Generate access and refresh tokens with user ID
    const accessToken = generateAccessToken(user.id, user.username);
    const refreshToken = generateRefreshToken(user.id, user.username);

    // Set cookies for access and refresh tokens
    res
      .status(200)
      .cookie("accessToken", accessToken, {
        httpOnly: true,
        sameSite: "strict",
        secure: true, // Set secure to true in production
        maxAge: 60 * 60 * 1000, // 30 minutes in milliseconds
      })
      .cookie("refreshToken", refreshToken, {
        httpOnly: true,
        sameSite: "strict",
        secure: true, // Set secure to true in production
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days in milliseconds
      })
      .cookie("userId", user.id, {
        // Send user_id as a cookie
        httpOnly: true,
        sameSite: "strict",
        secure: true, // Set secure to true in production
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days in milliseconds
      })
      .cookie("username", user.username, {
        httpOnly: true,
        sameSite: "strict",
        secure: true, // Set secure to true in production
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days in milliseconds
      });

    // Send the response
    res.status(200).json({
      message: "Login successful",
      accessToken: accessToken,
      refreshToken: refreshToken,
      user_Id: user.id, // Use user.id to get the user's ID from the database
      username: user.username,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "An error occurred during login",
      error: error.message,
    });
  }
};
