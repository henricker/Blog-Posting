const Post = require('../models/Post');


module.exports = {
    createPost: (request, response) => {
        if(request.body.title == "" && request.body.content == "")
            return response.redirect('/');
        Post
        .create(
            {
                title: request.body.title,
                content: request.body.content,
            }   
        )
        .then(() => { return response.redirect('/'); })
        .catch((err) => { return response.send('Error: ' + err.message); });
    },

    updatePost: (request, response, idPost) => { 
        if(request.body.title == "" && request.body.content == "")
            return response.redirect('/');
        
        const updateValues = {
            title: request.body.title,
            content: request.body.content
        }

        Post
        .update(
            updateValues,
            {
                where: {
                    id: idPost,
                }
            }
        )
        .then(() => { return response.redirect('/'); })
        .catch((err) => { return response.send('Error: ' + err.message); });
    },

    removePost: (idPost, response) => { 
        Post
        .destroy(
            {
                where: { id: idPost}
            }
            )
        .then(() => { return response.redirect('/'); })
        .catch((err) => { return response.send('Error: ' + err.message); });
    },

    listAllPosts: (response) => { 
        Post
        .findAll(
            {order: [['updatedAt', 'DESC']]},
        )
        .then((posts) => { 
            const allPosts = [];

            posts.forEach((post) => {
                const dict = {
                    id: post.id,
                    title: post.title,
                    content: post.content,
                    updatedAt: post.updatedAt
                }
                allPosts.push(dict);
            })

            return response.render('home', {posts: allPosts});
        })
        .catch((err) => { return response.send('Error: ' + err.message); } );
    }
    
}