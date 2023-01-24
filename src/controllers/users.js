const db = require("../database/models");
const bcrypt = require("bcrypt");
const controller = {
    loginRegister: (req,res) => {
        db.Type.findAll().then(types => {
            res.render("users/login-register",{
                title: ["Acceder"],
                styles: ["/login-register"],
                types
            })
        })
    },
    profile: (req,res) => {
        res.render("users/profile",{
            title: ["Perfil"],
            styles: ["/profile"]
        })
    },
    // CRUD
    create: (req,res) => {
        db.User.findOne({
            where: {
                email: String(req.body.email)
            }
        }).then(userFound => {
            if(!userFound){
                db.User.create({
                    username: req.body.username,
                    email: String(req.body.email),
                    // avatar: req.files[0].filename,
                    password: bcrypt.hashSync(req.body.password, 10),
                    isAdmin: String(req.body.email).includes("@lebixor.com"),
                    isActive: 1
            }).then(() =>{
                res.render("users/profile",{
                    styles: ["/profile"],
                    title: ["Perfil"]
                    
                });
            })
        } else {
            res.render("users/login-register",{
                styles: ["/login-register"],
                title: ["Ingresar"],
                error: {
                    email: {
                        msg: "Ese email ya se encuentra registrado"
                    }
                }
            });
        }
        })
    },
    access: (req,res) => {
        db.Type.findAll().then(types => {
            db.User.findOne({
                where: {
                    username: req.body.username
                }
            }).then(user => {
                if(!user){
                    res.render("users/login-register",{
                        styles: ["/login-register"],
                        title: ["Ingresar"],
                        error: {
                            username: {
                                msg: "No se encuentra un usuario con ese nombre"
                            }
                        },
                        types
                    });
                } else if(!bcrypt.compareSync(req.body.password,user.password)){
                    res.render("users/login-register",{
                        styles: ["/login-register"],
                        title: ["Ingresar"],
                        error: {
                            password: {
                                msg: "Contraseña Incorrecta"
                            }
                        },
                        types
                    });
                }
                    else {
                     if(req.body.remember){
                        res.cookie('username', req.body.username, {maxAge: 1000*60*60*24});
                        }
                    req.session.user = user;
                    res.render("users/profile", {
                        styles: ["/profile"],
                        title: ["Perfil"],
                    });
                }
            })
        })
    },

    update: (req,res) => {
        db.User.update({
            username: req.body.username,
            email: String(req.body.email)
        },{
            where: {
                id: req.params.id
            }
        }).then(() => {
            res.redirect("/profile")
        })
    },

    delete: (req,res) => {
        db.User.destroy({
            where: {
                id: req.params.id
            }
        }).then(() => {
            res.redirect("/")
        })
    }

}

module.exports = controller;