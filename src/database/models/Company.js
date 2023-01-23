module.exports = (Sequelize, dataTypes) => {
    const alias = "Company";
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
        tableName: "company_id"
    }

    const Company = Sequelize.define(alias,cols,config);
    return Company;
}