const route = require("express").Router()


route.get("/", function(req,res){
  res.send("ini halaman ustadz dari routes")
})

route.get("/add", )
route.post("/add" )

route.get("/update/:id", )
route.post("/update/:id" )

route.get("/delete/:id", )

route.get("/:UstadzId/santri-list")
route.post("/:UstadzId/santri-list/:UstadzSantrisid")





module.exports = route;