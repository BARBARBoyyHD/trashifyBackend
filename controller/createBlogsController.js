const db = require("../db");
const moment = require("moment");

exports.create = async (req, res) => {
  try {
    const { title, subject, body } = req.body;
    const created_at = moment().format("LL");
    const user_id = req.cookies["userId"]; 
    const author_name = req.cookies["username"]

    // Check if user exists
    const findUser = "SELECT * FROM users WHERE id = ?";
    const [userResult] = await db.query(findUser, [user_id]);

    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    // Validate image format
    const validFormats = ["image/jpeg", "image/png", "image/jpg"];
    if (!validFormats.includes(req.file.mimetype)) {
      return res.status(400).json({
        message: "Invalid image format. Only JPG and PNG are allowed.",
      });
    }

    const image = req.file.filename;

    // If no user is found, return an error
    if (userResult.length === 0) {
      return res.status(400).json({
        message: "User not found",
      });
    }

    // Proceed to insert the blog post
    const query =
      "INSERT INTO list_of_blogs (user_id, title, subject, body, author_name, created_at,image) VALUES (?, ?, ?, ?, ?, ?, ?)";
    const [result] = await db.query(query, [
      user_id,
      title,
      subject,
      body,
      author_name,
      created_at,
      image
    ]);

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
