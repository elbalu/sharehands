exports = module.exports = function (server) {

	"use strict";


	server.get('/getPost/all/:type', function (req, res) {

		console.log(server.locals.users.dummyUsers);
		var id = req.params.type,
			model,
			viewName,
			posts = server.locals.posts.dummyPosts;


		if (type === 'map') {
			viewName = 'post/map';
		} else {
			viewName = 'post/list';
		} 

		req.model = {
            viewName: viewName,
            master: 'public/templates/master',
            data: {
                title: 'Register',
                posts: posts
            }     
        };
        
        res.render(req.model.master, req.model);
		
    });


	server.get('/getPost/:id', function (req, res) {

		console.log(server.locals.users.dummyUsers);
		var id = req.params.id,
			model,
			post = null,
			posts = server.locals.posts.dummyPosts;

		if (id === 'all') {
			post = posts;
		} else {
			post = posts.filter(function (post) {
	        	return post.id === id;
	    	});
		} 

		if (post.length) {
			var model = {status : 'success', post: post};
		} else {
			var model = {status : 'failure', post: post};
		}

		res.json('sucess', model);
    });

};

