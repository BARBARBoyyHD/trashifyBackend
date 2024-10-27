const db = require("../db")

exports.getAllBlogsUserID = async (req,res)=>{
    try {
        const {user_id} = req.params

        const getAllBlogsUserIDQuery = "SELECT * FROM list_of_blogs WHERE user_id = ?"
        const[result] = await db.query(getAllBlogsUserIDQuery,[user_id])

        if(result.length === 0 ){
            return res.status(404).json({message:"Blogs list of user are not found"})
        }
        else{
            return res.status(200).json(result)
        }


    } catch (error) {
        return res.status(500).json({message:"Internal server Error"})
    }
}