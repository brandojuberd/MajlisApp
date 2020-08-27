const UstadzController = require("../controllers/ustadzController")

const route = require("express").Router()


route.get("/", UstadzController.showUstadzs)

route.get("/add", UstadzController.showAddUstadzForm)
route.post("/add", UstadzController.addUstadz)

route.get("/edit/:id", UstadzController.showEditUstadzForm)
route.post("/edit/:id", UstadzController.editUstadz)

route.get("/delete/:id", UstadzController.deleteUstadz)

route.get("/:UstadzId/santri-list", UstadzController.showUstadzSantris)
route.post("/:UstadzId/santri-list/add", UstadzController.addSantriToUstadz)





module.exports = route;