const db = require("../database/models");
const { Op } = require("sequelize");
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

    search: (req,res) => {
        let productToSearch = String(req.body.search);
        if(productToSearch != ""){
        db.Product.findAll({where:{name:{[Op.like]: '%'+productToSearch+'%'}}})
        .then(results => {
            db.Type.findAll()
            .then(types => {
                res.render("products/search",{
                    styles: ["/search"],
                    title: ["Resultados"],
                    types,
                    results
                })
            })
        })
        } else {
            res.redirect("/");
        }
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
            image: req.files[0].filename,
            price: req.body.price,
            description: req.body.description,
            quantity: req.body.quantity,
            color_id: req.body.color,
            type_id: req.body.type,
            company_id: req.body.company
        }).then((product) => {
            res.redirect("/product/" + product.id);
        }).catch(err => {
            res.send(err)
        })
    },
    update: (req,res) => {
        db.Product.update({
            name: req.body.name,
            // image: req.files[0].filename,
            price: req.body.price,
            description: req.body.description,
            quantity: req.body.quantity,
            color_id: req.body.color,
            type_id: req.body.type,
            company_id: req.body.company
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
    },
    list: (req,res) => {
        db.Product.findAll().then(products =>{
            if(products){
                res.render("products/list",{
                    styles: ["/productList"],
                    title: ["Lista Productos"],
                    products
                })
            }else {
                res.render("products/list",{
                    styles: ["/productList"],
                    title: ["Lista Productos"],
                    msg: 'No hay productos'
                })
            }
        }).catch(err => res.send(err))
    }
}

module.exports = controller;