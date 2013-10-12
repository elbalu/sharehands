var PostModel = require('../model/DBPostModel');
exports = module.exports = function (server) {

	"use strict";


	server.get('/getPost/all/:type', function (req, res) {

		var type = req.params.type,
			model,
			viewName,
			posts;


		PostModel.find({}, function(err, post) {
				if (err) {
					console.log(err);
					errmsg = err;
					var model = {status : 'error', msg: err};
					res.json(model);
				} else {

					if (type === 'map') {
						viewName = 'posts/map';
					} else {
						viewName = 'posts/list';
					} 
					req.model = {
						viewName: viewName,
						master: 'public/templates/master',
						data: {
							title: 'Register',
							posts: post
						}
					};
					//res.json(req.model);
					res.render(req.model.master, req.model);
				}

			});
    });


	server.get('/getPost/:id', function (req, res) {
		var id = req.params.id,
			model,
			errmsg = null,
			post = null;
			PostModel.find({"_id": id}, function(err, post) {
				if (err) {
					console.log(err);
					errmsg = err;
					var model = {status : 'error', msg: err};
					res.json(model);
				} else {
					
					var model = { 
						viewName: 'posts/singlePost',
						master: 'public/templates/master',
						status : 'success', 
						post: post
					};
					//res.json(model);
					res.render(model.master, model);
				}

			});
		
    });
    server.post('/post/request', function (req, res) {
		var id = req.params.id;
					var model = { 
						viewName: 'posts/success',
						master: 'public/templates/master'
					};
					//res.json(model);
					res.render(model.master, model);
				

			
		
    });

};

