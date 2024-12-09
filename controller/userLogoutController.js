exports.logout = async (req, res) => {
  res
    .status(202)
    .clearCookie("accessToken", {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
    })
    .clearCookie("refreshToken", {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
    })
    .clearCookie("userId", {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
    })
    .clearCookie("username", {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
    })
    .json({
      message: "Logout Success",
    });
};
