const {Santri} = require('../models');

class ControllerSantri {
    static show(req,res) {
        Santri.findAll({
            order:[['name','ASC']]
        })
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.send(err)
        })
    }
    static addForm(req,res) {
        
    }

    static addPost(req,res) {
        
    }

    static updateForm(req,res) {
        
    }

    static updatePost(req,res) {

    }

    static delete(req,res) {

    }
}

module.exports = ControllerSantri
