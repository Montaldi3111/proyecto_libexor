const db = require("../../database/models");

const controller = {
    all: (req,res) => {
        db.User.findAll().then(allUsers => {
            let result = {
                count: allUsers.length,
                users:[],
                meta: {
                    status: 200,
                    url: "api/users"
                }
            }
            allUsers.forEach(user => {
                result.users.push({
                    id: user.id,
                    username: user.username,
                    email: user.email,
                    detailURL: "https://localhost:3000/api/users/" + user.id
                });
            });
            return res.json(result)
        }).catch(err => {
            let result = {
                err,
                meta: {
                    status: 404,
                    url: "api/users"
                }
            }
            return res.json(result)
        })
    },
    last: (req,res) => {
        db.User.findOne({
            order: [["id", "DESC"]]
        }).then(user => {
            return res.status(200).json({
                data: {
                    id: user.id,
                    name: user.username,
                    email: user.email,
                    admin: user.isAdmin,
                    avatar: "https://localhost:3000/avatar/" + user.image,
                    user: "https://localhsot:3000/api/users/" + user.id
                },
                status: 200
            });
        }).catch(err => {
            return res.status(404).json({
                error: "No existe el usuario"
            })
        })
    },
    show: (req,res) => {
        db.User.findByPk(req.params.id).then(user => {
            if(user){
                return res.status(200).json({
                    data: {
                        id: user.id,
                        username: user.username,
                        email: user.email,
                        avatar: "https://localhost:3000/avatar/" + user.avatar,
                        admin: user.isAdmin,
                        detailURL: "https://localhost:3000/api/users/"+user.id
                    },
                    status: 200
                })
            } else {
                return res.status(404).json({
                    data: {
                        error: "No se encuentra ese usuario"
                    }
                })
            }
        }).catch(err => {
            return res.status(500).json({
                error: "No existe conexión a la base de datos"
            })
        })
    }
}

module.exports = controller