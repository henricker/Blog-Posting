const express = require('express');
const server = express();

//Import template engine 
const handlebars = require('express-handlebars'); 

//Import body-parser, to take data from form
const bodyParser = require('body-parser');

//Import models
const Post = require('./models/Post');

//config 
    
    //template-engine (handlebars)
    server.engine('handlebars', handlebars({defaultLayout: 'main'}));
    server.set('view engine', 'handlebars');
    
    // config body-parser
    server.use(bodyParser.urlencoded({extended: false}));
    server.use(bodyParser.json());

//routes
server.get('/cad', (request, response) => {
    response.render('form');
})

server.post('/add', (request, response) => {
    Post.create({
        title: request.body.title,
        content: request.body.content,
    }).then(() => {
        response.send("Post created with sucessfully!");
    }).catch((err) => {
        response.send(`Error! ${err.message}`);
    })
})

//Running server in 8080 port localhost.
server.listen('8080', () => {
    console.log("Server running!");
})
