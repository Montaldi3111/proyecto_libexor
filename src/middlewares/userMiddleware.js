const db = require("../database/models")

const userMiddleware = (req,res,next) =>{
    res.locals.isLogged = false;
    if(req.cookies.username != undefined){
        let userInCookie = req.cookies.username
        db.User.findOne({
            where: {
                username: userInCookie
            }
        }).then((userFound) => {
            if(userFound&&req.session){
                let userLogged = userFound
                req.session.user = userLogged
            }
        })
    }

    if(req.session && req.session.user){
        res.locals.isLogged = true;
        res.locals.user = req.session.user
    }

    next();
}

module.exports =userMiddleware;