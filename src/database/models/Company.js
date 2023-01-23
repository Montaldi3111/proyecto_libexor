module.exports = (Sequelize, dataTypes) => {
    const alias = "Company";
    const cols = {
        id:{
            primaryKey: true,
            autoIncrement: true,
            type: dataTypes.INTEGER
        },
        company:{
            notNULL: false,
            type: dataTypes.STRING,
    }
}

    const config = {
        timestamps: false,
        tableName: "company_id"
    }

    const Company = Sequelize.define(alias,cols,config);

    Company.associate = (models) => {
        Company.hasMany(models.Product, {
            as: "products",
            foreignKey: "company_id"
        })
    }

    return Company;
}