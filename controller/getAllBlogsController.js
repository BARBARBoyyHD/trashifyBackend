const db = require("../db")
exports.getBlogs = async (req,res)=>{
    try {

        const getAllBlogsQuery = "SELECT * FROM list_of_blogs"
        const [result] = await db.query(getAllBlogsQuery)

        if(!result || result.length === 0){
            return res.status(401).json({
                message: "All Blogs not found"
            })
        }
        else{
            return res.status(200).json(result)
        }


    } catch (error) {
        console.log(error);
        return res.status(500).json({message:"internal server error"})
    }
}