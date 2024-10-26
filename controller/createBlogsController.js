const db = require("../db");

exports.create = async (req, res) => {
  try {
    const { title, subject, body, author_name, user_id } = req.body; // Ensure user_id is included

    // Check if user exists
    const findUser  = 'SELECT * FROM users WHERE id = ?';
    const [userResult] = await db.query(findUser , [user_id]);

    // If no user is found, return an error
    if (userResult.length === 0) {
      return res.status(400).json({
        message: "User  not found",
      });
    }

    // Proceed to insert the blog post
    const query = "INSERT INTO list_of_blogs (user_id, title, subject, body, author_name) VALUES (?, ?, ?, ?, ?)";
    const [result] = await db.query(query, [user_id, title, subject, body, author_name]);

    // Check if the insert was successful
    if (result.affectedRows === 1) {
      return res.status(201).json({
        message: "Blog created successfully",
      });
    } else {
      return res.status(400).json({
        message: "Something went wrong",
      });
    }

  } catch (error) {
    console.error(error); // Log the error for debugging
    return res.status(500).json({ message: "Internal Server Error" });
  }
};