module.exports = (Sequelize, dataTypes) => {
    const alias = "Type";
    const cols = {
        id:{
            primaryKey: true,
            autoIncrement: true,
            type: dataTypes.INTEGER
        },
        type:{
            notNULL: false,
            type: dataTypes.STRING,
    }
}

    const config = {
        timestamps: false,
        tableName: "type_id"
    }

    const Type = Sequelize.define(alias,cols,config);

    Type.associate = (models) => {
        Type.hasMany(models.Product, {
            as: "products",
            foreignKey: "type_id"
        })
    }

    return Type;
}