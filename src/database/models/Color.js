module.exports = (Sequelize, dataTypes) => {
    const alias = "Color";
    const cols = {
        id:{
            primaryKey: true,
            autoIncrement: true,
            type: dataTypes.INTEGER
        },
        name:{
            notNULL: false,
            type: dataTypes.STRING,
    }
}

    const config = {
        timestamps: false,
        tableName: "color_id"
    }

    const Color = Sequelize.define(alias,cols,config);
    return Color;
}