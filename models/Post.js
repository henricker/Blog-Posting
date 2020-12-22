const db = require('./db');

//Create a model Post
const Post = db.sequelize.define('Posts', {
    title: db.DataTypes.STRING,
    content: db.DataTypes.TEXT
})

module.exports = Post;