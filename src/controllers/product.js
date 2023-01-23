const db = require("../database/models");

const controller = {
    detail: (req,res) => {
        db.Type.findAll().then(types => {
            db.Product.findOne({
                where: {
                    id: req.params.id
                }
            }).then(product => {
                res.render("products/detail", {
                styles: ["/detail"],
                title: ["Detalles"],
                product,
                types
                })
            })
        })
        
    },
    cart: (req,res) => {
        res.render("products/cart", {
            styles: ["/cart"],
            title:["Carro"]
        })
    }
}

module.exports = controller;