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
        db.Type.findAll().then(types => {
            res.render("users/profile",{
                title: ["Perfil"],
                styles: ["/profile"],
                types,
                user: req.session.user
            })
        })
    },
    // CRUD
    create: (req,res) => {
        db.Type.findAll().then(types => {
            db.User.findOne({
                where: {
                    email: String(req.body.email)
                }
            }).then(userFound => {
                if(!userFound){
                    db.User.create({
                        username: req.body.username,
                        email: String(req.body.email),
                        avatar: req.files[0].filename,
                        password: bcrypt.hashSync(req.body.password, 10),
                        isAdmin: String(req.body.email).includes("@lebixor.com"),
                        isActive: 1
                }).then(() =>{
                    res.render("users/login-register",{
                        styles: ["/login-register"],
                        title: ["Ingresar"],
                        types,
                        success: {
                            msg: "Usuario creado, ahora debes logearte"
                        }
                    })
                })
            } else {
                res.render("users/login-register",{
                    styles: ["/login-register"],
                    title: ["Ingresar"],
                    types,
                    error: {
                            msg: "Ese email ya se encuentra registrado"
                    }
                });
            }
            })
        })
        
    },
    access: (req,res) => {
        db.Type.findAll().then(types => {
            db.User.findOne({
                where: {
                    username: req.body.username
                }
            }).then(userFound => {
                if(!userFound){
                    res.render("users/login-register",{
                        styles: ["/login-register"],
                        title: ["Ingresar"],
                        types,
                        error: {
                            username: {
                                msg: "Usuario no encontrado"
                            }
                        }
                    })
                } else {
                    if(!bcrypt.compareSync(req.body.password, userFound.password)){ // Si la contraseña es incorrecta
                        res.render("users/login-register",{
                            styles: ["/login-register"],
                            title: ["Ingresar"],
                            types,
                            error: {
                                password: {
                                    msg: "Contraseña Incorrecta"
                                }
                            }
                        })
                    } else {
                        let userLogged = userFound;
                        userLogged.password = '';
                        if(req.body.remember){
                            res.cookie("username", req.body.username ,{maxAge: 1000*60*60*24})
                        }
                        req.session.user = userLogged;
                        res.redirect("/profile")
                    }
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
    },
    logout: (req,res) => {
        res.clearCookie("username")
        req.session.destroy(),
        res.redirect("/");
    },
    list: (req,res) => {
        db.User.findAll().then(users =>{
            if(users){
                res.render("users/list",{
                    styles: ["/userList"],
                    title: ["Lista Usuarios"],
                    users
                })
            } else {
                res.render("users/list",{
                    styles: ["/userList"],
                    title: ["Lista Usuarios"],
                    msg: "No hay usuarios"
            })
            }
        }).catch(err => res.send(err))
    }

}

module.exports = controller;