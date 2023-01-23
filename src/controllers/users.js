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
                res.send("Creado");
            })
        } else {
            res.send("Ya existe ese usuario");
        }
        })
    },
    access: (req,res) => {
        let exist = db.User.findOne({
            where: {
                username: req.body.username
            }
        }).then(user=> {
            if(!user){
                res.send
            }
        })
        if(req.body.remember){
        res.cookie('username', req.body.username, {maxAge: 1000*60*60*24});
        }
        // req.session.user = exist;
        res.send("Logueado");
    },

}

module.exports = controller;