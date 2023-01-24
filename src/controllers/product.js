const db = require("../database/models");

const controller = {
    detail: (req,res) => {
        db.Type.findAll().then(types => {
            db.Product.findOne({
                where: {
                    id: req.params.id
                }
            }).then(product => {
                if(!product){
                    res.render("error", {
                        styles: ["/error"],
                        title: ["Error"],
                        types
                    })
                } else {
                    res.render("products/detail", {
                        styles: ["/detail"],
                        title: ["Detalles"],
                        product,
                        types
                        })
                }
                
            })
        })
        
    },
    cart: (req,res) => {
        db.Type.findAll().then(types => {
            res.render("products/cart", {
                styles: ["/cart"],
                title:["Carro"],
                types
            })
        })
    },

    type: (req,res) => {
        db.Type.findAll().then(types => {
            db.Product.findAll({
                where: {
                    type_id: req.params.id
                }
              }).then(product => {
                    res.render("products/type", {
                        title: ["Lista de productos"],
                        styles: ["/type"],
                        types,
                        product
                    })
              })
        })
        
    },

    edit: (req,res) => {
        db.Color.findAll().then(colors => {
            db.Company.findAll().then(companys => {
                db.Type.findAll().then(types => {
            
                    db.Product.findOne({
                        where: {
                            id: req.params.id
                        }
                    }).then(product => {
                        if(!product){
                            res.send("Producto no encontrado");
                        } else {
                            res.render("products/edit", {
                                styles: ["/edit"],
                                title: ["Editar Producto"],
                                product,
                                types,
                                colors,
                                companys
                            })
                        }
                    })
                })
            })
        })
    },

    add: (req,res) => {
        db.Type.findAll().then(types => {
            db.Company.findAll().then(brands => {
                db.Color.findAll().then(colors => {
                    res.render("products/create", {
                        styles: ["/create"],
                        title: ["Crear Producto"],
                        types,
                        colors,
                        companys: brands
                    })
                })
            })
        })
    },
    //CRUD
    create: (req,res) => {
        db.Product.create({
            name: req.body.name,
            // image: req.files[0].filename,
            price: req.body.price,
            description: req.body.description,
            quantity: req.body.quantity,
            color_id: req.body.color_id,
            type_id: req.body.type_id,
            company_id: req.body.company_id
        }).then((product) => {
            res.redirect("products/" + product.id);
        })
    },
    update: (req,res) => {
        db.Product.update({
            name: req.body.name,
            // image: req.files[0].filename,
            price: req.body.price,
            description: req.body.description,
            quantity: req.body.quantity,
            color_id: req.body.color_id,
            type_id: req.body.type_id,
            company_id: req.body.company_id
        },{
            where: {
                id: req.params.id
            }
        }).then(()=>(
            res.redirect("/product/" + req.params.id)
        ))
    },
    delete: (req,res) => {
        db.Product.destroy({
            where: {
                id: req.params.id
            }
        }).then(() =>{
            res.redirect("/");
        })
    }
}

module.exports = controller;