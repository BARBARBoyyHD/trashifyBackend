require("dotenv").config();
const db = require("../db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Function to generate a refresh token
const generateRefreshToken = (username) => {
  return jwt.sign({ username }, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: "7d",
  });
};

exports.register = async (req, res) => {
  try {
    const { username, password, email, date } = req.body;

    // Validate that all fields are filled
    if (!username || !password || !email || !date) {
      return res.status(400).json({
        message: "Please fill all the fields",
      });
    }

    // Validate username length
    if (username.length < 6) {
      return res.status(400).json({
        message: "Username must be at least 6 characters long",
      });
    }

    // Check if the username already exists
    const [existingUser] = await db.query(
      "SELECT * FROM users WHERE username = ?",
      [username]
    );
    if (existingUser.length > 0) {
      return res.status(400).json({
        message: "Username already exists",
      });
    }

    // Validate password length
    if (password.length < 8) {
      return res.status(400).json({
        message: "Password must be at least 8 characters long",
      });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Generate the refresh token
    const refreshToken = generateRefreshToken(username);

    // Calculate expiration date (7 days from now)
    const refreshTokenExpiration = new Date();
    refreshTokenExpiration.setDate(refreshTokenExpiration.getDate() + 7);

    // Insert the new user into the database
    const query =
      "INSERT INTO users(username, password, email, birthday, refresh_token, refresh_token_expired) VALUES(?, ?, ?, ?, ?, ?)";
    const [result] = await db.query(query, [
      username,
      hashedPassword,
      email,
      date,
      refreshToken,
      refreshTokenExpiration, // Save the expiration date
    ]);

    // Check if the insert was successful
    if (result.affectedRows > 0) {
      res.status(201).json({
        message: "User  registered successfully",
      });
    } else {
      res.status(400).json({
        message: "User  registration failed",
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "An error occurred during registration",
      error: error.message,
    });
  }
};
