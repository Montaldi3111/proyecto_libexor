module.exports = (Sequelize, dataTypes) => {
    const alias = "Product";
    const cols = {
        id:{
            primaryKey: true,
            autoIncrement: true,
            type: dataTypes.INTEGER
        },
        name:{
            notNULL: false,
            type: dataTypes.STRING,
        },
        image: {
            notNULL: false,
            type: dataTypes.STRING
        },
        price: {
            notNULL: false,
            type: dataTypes.INTEGER
        },
        description:{
            notNULL: false,
            type: dataTypes.STRING
        },
        quantity: {
            notNULL: false,
            type: dataTypes.INTEGER
        },
        color_id: {
            notNULL: false,
            type: dataTypes.INTEGER
        },
        type_id: {
            notNULL: false,
            type: dataTypes.INTEGER
        },
        company_id: {
            notNULL: false,
            type: dataTypes.INTEGER
        },
    }

    const config = {
        timestamps: false,
        tableName: "products"
    }

    const Product = Sequelize.define(alias,cols,config);

    Product.associate = (models) =>{
        Product.belongsTo(models.Color, {
            as: "color",
            foreignKey: "color_id"
        });
        Product.belongsTo(models.Type, {
            as: "type",
            foreignKey: "type_id"
        });
        Product.belongsTo(models.Company, {
            as: "company",
            foreignKey: "company_id"
        })
    }

    return Product;
}