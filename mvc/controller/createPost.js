exports = module.exports = function (server) {

	"use strict";

	server.get('/getPost/:id', function (req, res) {

		console.log(server.locals.users.dummyUsers);
		var id = req.params.id,
			model,
			user = null,
			users = server.locals.users.dummyUsers;

		if (id === 'all') {
			user = users;
		} else {
			user = users.filter(function (usr) {
	        	return usr.id === id;
	    	});
		} 

		if(user.length) {
			var model = {status : 'success', user: user};
		} else {
			var model = {status : 'failure', user: user};
		}

        
		res.json('sucess', model);
    });

    

    server.get('/createPost', function (req, res) {

    	var model = {
	            viewName: 'post/createPost',
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