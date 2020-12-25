const { Router } = require('express');

//Import models
const Post = require('./models/Post');

const routes = Router();

routes.get('/create', (request, response) => {
    response.render('form');
})

routes.get('/update/:id', (request, response) => {
    response.render('update', {id: request.params.id});
    console.log('id: ' + request.params.id);
})

routes.get('/', (request, response) => {
    
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

routes.post('/add', (request, response) => {
    if(!(request.body.title == "" && request.body.content == "")) {
        Post.create({
        title: request.body.title,
        content: request.body.content,
        }).then(() => {
            response.redirect('/');
        }).catch((err) => {
            response.send(`Error! ${err.message}`);
        })
    }else
        response.redirect('/');
});

routes.post('/up/:id', (request, response) => {

    if(!(request.body.title == "" && request.body.content == "")) {
        const updateValues = {
            title: request.body.title,
            content: request.body.content
        }

        console.log(request.body.id);
        Post.update(updateValues, {where: {id: request.params.id}})
        .then(() => {
            response.redirect('/');
        }).catch((err) => {
            response.send('Error: ' + err.message);
        });
    }
    else
        response.redirect('/');
});

routes.get('/remove/:id', (request, response) => {
    Post.destroy({where: {id: request.params.id}})
    .then(() => {
        response.redirect('/');
    }).catch((err) => {
        response.send('Ocorreu um erro: ' + err);
    })
});

module.exports = routes;