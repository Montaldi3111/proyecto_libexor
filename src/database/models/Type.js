module.exports = (Sequelize, dataTypes) => {
    const alias = "Type";
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
        tableName: "type_id"
    }

    const Type = Sequelize.define(alias,cols,config);
    return Type;
}