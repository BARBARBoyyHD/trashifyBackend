require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const authUsers = require("./middleware/authUser");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

app.use(bodyParser.json())
app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);
app.use(cookieParser());
app.set("trust proxy", true);

const port = process.env.PORT;

app.get("/", (req, res) => {
  res.json({
    message: "hello",
  });
});

app.get("/api/test", authUsers, (req, res) => {
  res.json({
    message: "lets test this",
  });
});
//get
app.get("/api/authUser", require("./routes/authRoutes"));

//post 
app.post("/api/login", require("./routes/loginRoutes"));
app.post("/api/register", require("./routes/registerRoutes"));
app.post("/api/refreshToken", require("./routes/refreshRoutes"));
app.post("/api/createBlogs", require("./routes/blogsRoutes"));

// delete
app.delete("/api/deleteCookies",require('./routes/deleteCookies')) // Logout
app.delete("/api/deleteBlogs",require('./routes/deleteBlogsRoutes'))


app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});