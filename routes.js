const { Router } = require('express');

const routes = Router();

//Import functions from postController
const { createPost, removePost, updatePost, listAllPosts} =  require('./controller/postController');


//Routes
routes.get('/create', (request, response) => {
    response.render('form');
})

routes.get('/update/:id', (request, response) => {
    response.render('update', {id: request.params.id});
})

routes.get('/', (request, response) => { listAllPosts(response)})

routes.post('/add', (request, response) => {createPost(request, response)});

routes.post('/up/:id', (request, response) => { updatePost(request, response, request.params.id)});

routes.get('/remove/:id', (request, response) => { removePost(request.params.id, response); });

module.exports = routes;