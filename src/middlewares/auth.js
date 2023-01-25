var authMiddleware = (req,res,next) => {
    if(!req.session.user){
        return res.redirect("/login-register");
    }
        next();
}

module.exports = authMiddleware;