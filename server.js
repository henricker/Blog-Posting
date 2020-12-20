const express = require('express');
const server = express();
const Sequelize = require('sequelize');
const handlebars = require('express-handlebars');

//config 
    //template-engine (handlebars)
    server.engine('handlebars', handlebars({defaultLayout: 'main'}));
    server.set('view engine', 'handlebars')
//Connection with mysql database
    const sequelize = new Sequelize('test', 'root', '32317461Henrique@', {
        host: 'localhost',
        dialect: 'mysql'
    })

//routes
server.get('/cad', (req, res) => {
    res.render('form');
})

server.post('/add', (req, res) => {
    res.send("Data received!");
})

//Running server in 8080 port localhost.
server.listen('8080', () => {
    console.log("Server running!");
})
