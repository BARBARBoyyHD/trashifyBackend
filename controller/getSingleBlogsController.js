const db = require("../db");

exports.getSingleBlogs = async (req, res) => {
    try {
        const { blogs_id } = req.params;
        const query = "SELECT * FROM list_of_blogs WHERE blogs_id = ?";

        const [result] = await db.query(query, [blogs_id]);

        // Check if the result is empty
        if (result.length === 0) {
            return res.status(404).json({ message: "Blog not found" }); // Use 404 for not found
        } else {
            return res.status(200).json(result[0]); // Return the first blog object
        }

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
    }
};