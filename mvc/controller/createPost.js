var auth = require('../helper/auth');

exports = module.exports = function (server) {

    server.get('/createPost', auth.validateSession, function (req, res) {

    	var model = {
	            viewName: 'posts/createPost',
	            master: 'public/templates/master',
	            data: {
	                title: 'Create Post'
	            }
	        };
        req.model = model;

        res.render(req.model.master, model);

    });

    server.post('/createPost', function (req, res) {

		console.log(server.locals.posts.dummyPosts);
		
		var post = new PostModel(server.locals.posts.dummyPosts.length+1, 
									req.body.title, 
									req.body.categeory,
									req.body.location, 
									req.body.desc, 
									req.session.user);

		server.locals.posts.dummyPosts.push(post);
		
		var model = {
	            viewName: 'post/success',
	            master: 'public/templates/master',
	            data: {
	                title: 'Posted',
	                post: post,
	                user: req.session.user || null
	            }
	        };

		req.model = model;
        
        //res.render(req.model.master, req.model);
        
		res.json('sucess', model);
    });

};