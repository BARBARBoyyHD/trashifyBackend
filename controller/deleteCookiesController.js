
exports.delete = (req,res)=>{
    res
    .status(202)
    .clearCookie("accessToken")
    .clearCookie("refreshToken")
    .send("Cookies have been deleted");
}