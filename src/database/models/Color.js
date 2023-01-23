module.exports = (Sequelize, dataTypes) => {
    const alias = "Color";
    const cols = {
        id:{
            primaryKey: true,
            autoIncrement: true,
            type: dataTypes.INTEGER
        },
        color:{
            notNULL: false,
            type: dataTypes.STRING,
    }
}

    const config = {
        timestamps: false,
        tableName: "color_id"
    }

    const Color = Sequelize.define(alias,cols,config);

    Color.associate = (models) => {
        Color.hasMany(models.Product, {
            as: "products",
            foreignKey: "color_id"
        })
    }

    return Color;
}