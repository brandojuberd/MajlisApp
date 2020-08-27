const route = require("express").Router()
const ustadz = require("./ustadz")
const santri = require("./santri")
const userController = require('../controllers/userController');
const authentication = require('../middlewares/authentication');



route.get("/login", userController.formLogin)
route.post("/login", userController.login)


route.get("/register", userController.formRegister) 
route.post("/register",userController.register)

//middleware
route.use(authentication)

route.get("/", function(req,res){
  res.render("home.ejs")
})

route.get("/logout", userController.logout)

route.use("/ustadz", ustadz)
route.use("/santri", santri)


module.exports = route;