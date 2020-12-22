const express = require('express');
const server = express();
const Sequelize = require('sequelize');
const handlebars = require('express-handlebars'); 
const bodyParser = require('body-parser');


//config 
    
    //template-engine (handlebars)
    server.engine('handlebars', handlebars({defaultLayout: 'main'}));
    server.set('view engine', 'handlebars');
    
    // config body-parser
    server.use(bodyParser.urlencoded({extended: false}));
    server.use(bodyParser.json());

//Connection with mysql database
    const sequelize = new Sequelize('test', 'root', '32317461Henrique@', {
        host: 'localhost',
        dialect: 'mysql'
    })

//routes
server.get('/cad', (request, response) => {
    response.render('form');
})

server.post('/add', (request, response) => {
    response.send(request.body);
    //res.send("Data received!");
})

//Running server in 8080 port localhost.
server.listen('8080', () => {
    console.log("Server running!");
})
