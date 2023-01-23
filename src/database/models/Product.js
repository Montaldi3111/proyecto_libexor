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
        color_id: {
            notNULL: false,
            type: dataTypes.INTEGER
        },
    }

    const config = {
        timestamps: false,
        tableName: "products"
    }

    const Product = Sequelize.define(alias,cols,config);
    return Product;
}