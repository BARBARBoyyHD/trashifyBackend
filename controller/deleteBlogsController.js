const db = require("../db");

exports.delete = async (req, res) => {
  try {
    const { blogs_id } = req.params;

    // Check if the blog exists
    const findBlogIdQuery = "SELECT * FROM list_of_blogs WHERE blogs_id = ?";
    const [blog] = await db.query(findBlogIdQuery, [blogs_id]);

    if (blog.length === 0) {
      // If no blog is found, return a 404 status
      return res.status(404).json({
        message: "Blog not found",
      });
    }

    // Proceed to delete the blog
    const deleteBlogsQuery = "DELETE FROM list_of_blogs WHERE blogs_id = ?";
    const [result] = await db.query(deleteBlogsQuery, [blogs_id]);

    if (result.affectedRows === 1) {
      return res.json({ message: "Blog deleted successfully" });
    } else {
      return res.status(500).json({
        message: "Something went wrong while deleting the blog",
      });
    }

  } catch (error) {
    console.error(error); // Log the error for debugging purposes
    return res.status(500).json({ message: "Internal server error" });
  }
};