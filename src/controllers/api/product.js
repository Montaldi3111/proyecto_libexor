const db = require("../../database/models");
const {Op} = require("Sequelize")

const controller = {
    all: (req,res) => {
        db.Product.findAll({
            include: [{
                association: "color"
            },
            {
                association:"type"
            },
            {
                association: "company"
            }]
        }).then(allProducts => {
            let result = {
                count: allProducts.length,
                products: [],
                meta: {
                    status: 200,
                    url: "api/products"
                }
            }
            allProducts.forEach(product => {
                result.products.push({
                    id: product.id,
                    name: product.name,
                    description: product.description,
                    color: product.color,
                    type: product.type,
                    company_id: product.company,
                    detailURL: "https://localhost:3000/api/products/" + product.id
                })
            })
            return res.json(result)
            
        }).catch(err => {
            let result = {
                err,
                meta: {
                    status: 404,
                    url: "api/products"
                }
            }
            res.json(result)
        })
    },
    last: (req,res) => {
        db.Product.findOne({
            order: [["id", "DESC"]]
        })
        .then((product) => {
            return res.status(200).json({
                data: {
                    id: product.id,
                    name: product.name,
                    image: "https://localhost:3000/api/images/" + product.image,
                    description: product.description,
                    color: product.color,
                    type: product.type,
                    company_id: product.company,
                },
                status: 200
            })
        }).catch(err => {
            return res.status(404).json({
                error: "No existe el producto"
            })
        })
    },
    show: (req,res) => {
        db.Product.findByPk(req.params.id, {
            include: [{association: "color"},
            {association: "type"},
            {association: "company"}
        ]
        }).then((product => {
            if(product){
                return res.status(200).json({
                    id: product.id,
                    name: product.name,
                    image: "https://localhost:3000/api/images/" + product.image,
                    color: product.color,
                    type: product.type,
                    company: product.company,
                    detailURL: "https://localhost:3000/api/products/" + product.id
                })
            } else {
                return res.status(404).json({
                    error: "Producto no encontrado"
                })
            }
        })).catch(err => {
            return res.status(500).json({
                error: "Conexión con la base de datos inexistente"
            })
        })
    }
}

module.exports = controller