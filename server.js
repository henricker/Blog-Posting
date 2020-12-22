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

server.get('/', (request, response) => {
    
    Post
    .findAll({order: [['id', 'DESC']]})
    .then((objs) => {
        const posts = [];
        objs.forEach((obj) => {
            const dict = {
                'id': obj.id,
                'title': obj.title,
                'content': obj.content
            };
            posts.push(dict);
        })
        response.render('home', {posts: posts});
    });
});

server.post('/add', (request, response) => {
    Post.create({
        title: request.body.title,
        content: request.body.content,
    }).then(() => {
        response.redirect('/');
    }).catch((err) => {
        response.send(`Error! ${err.message}`);
    })
})

server.get('/remove/:id', (request, response) => {
    Post.destroy({where: {id: request.params.id}})
    .then(() => {
        response.redirect('/');
    }).catch((err) => {
        response.send('Ocorreu um erro: ' + err);
    })
})

//Running server in 8080 port localhost.
server.listen('8080', () => {
    console.log("Server running!");
})
