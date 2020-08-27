const {Ustadz, UstadzSantri, Santri} = require("../models")
const ustadzName = require("../helpers/ustadzName")
class UstadzController{
  static showUstadzs(req, res){
    let ustadzsData;


    Ustadz.findAll()
      .then(function(data){
        ustadzsData = data
        res.render("ustadz-list.ejs", {ustadzsData, ustadzName})
      })
      .catch(function(err){
        res.send(err)
      })
  }

  static showAddUstadzForm(req,res){
    let error = res.app.locals.err;
    res.render("add-ustadz-form.ejs", {error})
  }

  static addUstadz(req,res){
    let newData = req.body
    let error;

    Ustadz.create(newData)
      .then(function(){
        res.redirect("/ustadz" )
      })
      .catch(function(err){
        error = err.errors[0].message
        res.render("add-ustadz-form", {error})
      })
  }

  static showEditUstadzForm(req, res){
    let reqId = req.params.id
    let ustadzData;
    let error = res.app.locals.err;
    let skill = [
      "Hadist",
      "Fiqih",
      "Quran"
    ]
    Ustadz.findByPk(reqId)
      
      .then(function(data){
        ustadzData = data
        res.render("edit-ustadz-form", {ustadzData,error,skill})
      })
      .catch(function(err){
        res.send(err)
      })
  }

  static editUstadz(req, res){
    let newData = req.body
    let editId = req.params.id
    let error;
    let skill = [
      "Hadist",
      "Fiqih",
      "Quran"
    ]
    Ustadz.update(newData, {where:{id : editId}})
      .then(function(data){
        res.redirect("/ustadz", {error})
      })
      .catch(function(err){
        error = err.errors[0].message
        res.render("edit-ustadz-form", {ustadzData: newData, error, skill})
      })
  }

  static deleteUstadz(req,res){
    let deleteId = req.params.id
    Ustadz.destroy({where:{id:deleteId}})
      .then(function(data){
        res.redirect("/ustadz")
      })
      .catch(function(err){
        res.send(err);
      })
  }

  static showUstadzSantris(req,res){
    let reqId = req.params.UstadzId
    let ustadzSantrisData;
    let santrisData;
    UstadzSantri.findAll({
      where:{UstadzId:reqId},
      include:[Ustadz, Santri]

    })
      .then(function(data){
        ustadzSantrisData = data;
        // console.log(data);
        return Santri.findAll()
      })
      .then(function(data){
        santrisData = data
        res.render("ustadz-santris-list", {ustadzSantrisData, ustadzName, santrisData})

      })
  }

  static addSantriToUstadz(req,res){
    let ustadzId = req.params.UstadzId
    let newData = {
      result : req.body.result,
      SantriId: req.body.SantriId,
      UstadzId: ustadzId
    }
    UstadzSantri.create(newData)
      .then(function(){
        res.redirect(`/${ustadzId}/santri-list`)
      })
      .catch(function(err){
        res.send(err)
      })
  }
}

module.exports = UstadzController;