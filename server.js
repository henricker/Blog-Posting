const express = require('express');
const server = express();

//Import template engine 
const handlebars = require('express-handlebars'); 

//Import body-parser, to take data from form
const bodyParser = require('body-parser');


//Import routes
const route = require('./routes');

//config 
    
    //template-engine (handlebars)
    server.engine('handlebars', handlebars({defaultLayout: 'main'}));
    server.set('view engine', 'handlebars');
    
    // config body-parser
    server.use(bodyParser.urlencoded({extended: false}));
    server.use(bodyParser.json());
    
    //config routes
    server.use(route);

//routes


//Running server in 8080 port localhost.
server.listen('8080', () => {
    console.log("Server running!");
});
