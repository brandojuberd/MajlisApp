const {User} =require('../models');
const bcrypt = require('bcryptjs');

class userController {
    static formLogin(req,res) {
        let errors = req.app.locals.errors
        delete req.app.locals.errors
        
        res.render("loginForm", {errors})
    }

    static login(req,res) {
        User.findOne({
            where: {
                username:req.body.username
            }
        })
        .then(data => {
            console.log(data, ">>>>>>>>>>>>>>>>>>>>")
            if(data) {
                let flag = bcrypt.compareSync(req.body.password, data.password)
                if(flag) {
                    req.session.user = data.username
                    res.redirect("/")
                } else {
                    req.app.locals.errors = `Username/password wrong`
                    res.redirect("/login")
                }
            } else {
                req.app.locals.errors = `Username/password wrong`
                res.redirect("/login")
            }
        })
        .catch(err => {
            res.send(err)
        })
    }

    static formRegister(req,res) {
        res.render("formRegister")
    }

    static register(req,res) {
        let params = {
            username: req.body.username,
            password: req.body.password
        }

        User.create(params)
        .then(data => {
            res.redirect("/login")
        })
        .catch(err => {
            res.send(err)
        })
    }

    static logout(req,res) {
        req.session.destroy(err => {
            if(err) {
                res.send(err)
            } else {
                res.redirect("/login")
            }
        })
    }
}

module.exports = userController
