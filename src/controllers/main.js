const db = require("../database/models");

const controller = {
    home: (req,res)=>{
        db.Product.findAll(
            {
                includes :[
                    {
                        association: "color",
                        association: "type",
                        association: "company"
                    }
                ],
                limit: 12
                
            }
        ).then(products => {
            db.Type.findAll().then(types => {
                res.render("home",{
                title: "Home",
                styles: ["/home"],
                products,
                types
            });
            })
        })
    }
}

module.exports = controller;