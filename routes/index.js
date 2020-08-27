const route = require("express").Router()
const ustadz = require("./ustadz")
const santri = require("./santri")

route.get("/", function(req,res){
  res.send("ini dari routes")
})

// route.get("/login" )

// route.get("/register", function()) // menunjukkan halaman register
// route.post("/register")  //Create user di database


route.use("/ustadz", ustadz)
route.use("/santri", santri)


module.exports = route;