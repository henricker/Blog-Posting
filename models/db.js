const Sequelize = require('sequelize');

//Connection with database
const sequelize = new Sequelize('blogPost', 'root', '32317461Henrique@', {
    host: 'localhost',
    dialect: 'mysql',
})

module.exports = {
    Sequelize: sequelize,
    sequelize: sequelize,
    DataTypes: Sequelize.DataTypes
}