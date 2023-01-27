const adminMiddleware = (req,res,next) => {
    if(!req.session.user|| req.session.user.isAdmin == 0){
        res.redirect("/");
    }

    next();
}

module.exports = adminMiddleware;