exports.delete = (req, res) => {
  res
    .status(200)
    .clearCookie("accessToken")
    .clearCookie("refreshToken")
    .json({ message: "Cookies have been deleted" });
};
