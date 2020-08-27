const route = require("express").Router()
const Controller = require('../controllers/santriController');

route.get("/", Controller.show)

route.get("/add", Controller.addForm)
route.post("/add", Controller.addPost)

route.get("/update/:id", Controller.updateForm)
route.post("/update/:id", Controller.updatePost )

route.get("/delete/:id", Controller.delete)

module.exports = route;