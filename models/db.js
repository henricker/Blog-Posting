const Sequelize = require('sequelize');

//Connection with database
const sequelize = new Sequelize('blogPost', 'root', 'yourPasswordHere', {
    host: 'localhost',
    dialect: 'mysql',
})

module.exports = {
    Sequelize: sequelize,
    sequelize: sequelize,
    DataTypes: Sequelize.DataTypes
}