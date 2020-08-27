const route = require("express").Router()


route.get("/", function(req,res){
  res.send("ini halaman santri dari routes")
})

route.get("/add", )
route.post("/add" )

route.get("/update/:id", )
route.post("/update/:id" )

route.get("/delete/:id", )

module.exports = route;