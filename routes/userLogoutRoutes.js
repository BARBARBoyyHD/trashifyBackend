const express =require("express")
const Routes = express.Router()
const LogoutController = require("../controller/userLogoutController")

Routes.get("/api/user/logout",LogoutController.logout)

module.exports = Routes