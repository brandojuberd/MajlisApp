const {Santri} = require('../models');


class ControllerSantri {
    static show(req,res) {
        Santri.findAll({
            order:[['name','ASC']]
        })
        .then(data => {
            // res.send(data)
            res.render("santri",{data})
        })
        .catch(err => {
            res.send(err)
        })
    }
    static addForm(req,res) {
        res.render("addSantri")
    }

    static addPost(req,res) {
        const {name,parent,birth_year,gender,address,email} = req.body
        Santri.create({
            name, 
            parent,
            birth_year,
            gender,
            address,
            email
        })
        .then(data => {
            res.redirect("/santri")
        })
        .catch(err => {
            res.send(err)
        })
    }

    static updateForm(req,res) {
        Santri.findOne({
            where:{
                id: req.params.id
            }
        })
        .then(data => {
            res.render("editSantri",{data})
           
        })
        .catch(err => {
            res.send(err)
        })
    }

    static updatePost(req,res) {
        Santri.update({
            name: req.body.name,
            parent: req.body.parent,
            birth_year: req.body.birth_year,
            gender: req.body.gender,
            address: req.body.address,
            email: req.body.email
        },{
            where: {
                id: req.params.id
            },
            individualHooks: true
        })
        .then(data => {
            res.redirect("/santri")
        })
        .catch(err => {
            res.send(err)
        })
    }

    static delete(req,res) {
        Santri.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(data => {
            res.redirect("/santri")
        })
        .catch(err => {
            res.send(err)
        })
    }
}

module.exports = ControllerSantri
