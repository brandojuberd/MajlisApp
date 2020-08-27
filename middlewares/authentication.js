const authentication = (req,res,next) => {
    if(req.session.user) {
        next()
    } else {
        req.app.errors = `Unauthorized page`
        res.redirect("/login")
    }
}

module.exports = authentication
