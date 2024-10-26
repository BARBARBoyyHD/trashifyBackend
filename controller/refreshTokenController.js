const jwt = require("jsonwebtoken");

exports.refreshToken = async (req, res) => {
    const refreshToken = req.body.refreshToken; // Assume refresh token is sent in the request body

    if (!refreshToken) {
        return res.status(401).json({ message: "Refresh token required" });
    }

    // Verify the refresh token
    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
        if (err) {
            return res.status(403).json({ message: "Invalid refresh token" });
        }

        // Generate a new access token
        const accessToken = jwt.sign({ username: user.username }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15m' });

        res.json({ accessToken });
    });
}