const db = require("../db")

exports.getProfile = async (req,res)=>{
    try {
        const {id} = req.params

        const getProfileQuery = "SELECT username,email,birthday FROM users WHERE id = ?"
        const [result] = await db.query(getProfileQuery,[id])

        if(result.length === 0 ){
            return res.status(404).json({message:"user not found"})
        }
        else{
            return res.status(200).json(result)
        }


    } catch (error) {
        return res.status(500).json({message:"Internal Server Error"})
    }
}