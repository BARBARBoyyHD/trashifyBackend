require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const authUsers = require("./middleware/authUser");
const refresh_token = require("./middleware/refreshTokenValidate")
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const rateLimiter = require("express-rate-limit")
const multer = require("multer")
const path = require("path");

const limiter = rateLimiter({
  windowMs: 60 * 60 * 1000, 
  max: 1000, // Limit each IP to 5 requests per windowMs
  message: (req, res) => `Too many requests from this IP: ${req.ip}, please try again later.`,
  standardHeaders: true, // Correct spelling
  legacyHeaders: false,  // Correct spelling
})
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads"); // Folder where images will be stored
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    ); 
  },
});
const upload = multer({ storage: storage });
app.use(limiter)
app.use(bodyParser.json())
app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);
app.use(cookieParser());
app.set("trust proxy", 1);

const port = process.env.PORT;

//get
app.get("/api/news/waste/management",require("./routes/getWasteNews"))
app.get("/api/authUser", require("./routes/authRoutes"));
app.get("/api/getAllBlogs",authUsers,refresh_token,require("./routes/getAllBlogsRoutes"))
app.get("/api/getSingleBlogs/:blogs_id",authUsers,refresh_token,require("./routes/getSingleBlogs"))
app.get("/api/getAllBlogsUserId/:user_id",authUsers,refresh_token,require("./routes/getAllBlogsUserIdRoutes"))
app.get("/api/userProfile/:id",authUsers,refresh_token,require("./routes/userProfileRoutes"))
app.get("/api/user/logout",require("./routes/userLogoutRoutes"))

//post 
app.post("/api/login", require("./routes/loginRoutes"));
app.post("/api/register", require("./routes/registerRoutes"));
app.post("/api/refreshToken", require("./routes/refreshRoutes"));
app.post("/api/createBlogs",upload.single("image"), authUsers,refresh_token,require("./routes/blogsRoutes"));

// delete
app.delete("/api/deleteCookies",require('./routes/deleteCookies')) // Logout
app.delete("/api/deleteBlogs/:blogs_id",authUsers,refresh_token,require('./routes/deleteBlogsRoutes'))

// put
app.put("/api/updateBlogs/:blogs_id",authUsers,refresh_token,require('./routes/updateBlogsRoutes'))

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
