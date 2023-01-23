module.exports = (Sequelize, dataTypes) => {
    const alias = "User";
    const cols = {
        id:{
            primaryKey: true,
            autoIncrement: true,
            type: dataTypes.INTEGER
        },
        username:{
            isNull: false,
            type: dataTypes.STRING,
        },
        email:{
            isNull: false,
            type: dataTypes.STRING,
        },
        avatar:{
            isNull: false,
            type: dataTypes.STRING,
        },
        password:{
            isNull: false,
            type: dataTypes.STRING,
        },
        isAdmin: {
            isNull: false,
            type: dataTypes.INTEGER,
        },
        isActive: {
            isNull: false,
            type: dataTypes.INTEGER,
        }
    }

    const config = {
        timestamps: false,
        tablename: "users"
    }

    const User = Sequelize.define(alias,cols,config);
    return User;
}