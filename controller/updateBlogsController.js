const db = require("../db");

exports.update = async (req, res) => {
    try {
      const { blogs_id } = req.params;
      const { title, subject, body } = req.body;
  
      // Validate request body
      if (!title || !subject || !body) {
        return res.status(400).json({
          message: "Title, subject, and body are required",
        });
      }
  
      const findBlogsquery = "SELECT * FROM list_of_blogs WHERE blogs_id = ?";
      const [findBlogsID] = await db.query(findBlogsquery, [blogs_id]);
      if (findBlogsID.length === 0) {
        return res.status(404).json({
          message: "Blog not found",
        });
      }
  
      const updateBlogs =
        "UPDATE list_of_blogs SET title = ?, subject = ?, body = ? WHERE blogs_id = ?";
      const [result] = await db.query(updateBlogs, [
        title,
        subject,
        body,
        blogs_id,
      ]);
  
      if (result.affectedRows === 1) {
        return res.json({
          message: "Blog updated successfully",
        });
      } else {
        return res.status(500).json({
          message: "Something went wrong while updating the blog",
        });
      }
    } catch (error) {
      console.error("Error updating blog:", error); // Log the error
      return res.status(500).json({
        message: "Internal server error",
      });
    }
  };