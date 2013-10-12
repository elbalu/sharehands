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
						viewName = 'post/map';
					} else {
						viewName = 'post/list';
					} 
					req.model = {
						viewName: viewName,
						master: 'public/templates/master',
						data: {
							title: 'Register',
							posts: post
						}
					};
					res.json(req.model);
					//res.render(req.model.master, req.model);
				}

			});
    });


	server.get('/getPost/:id', function (req, res) {

		console.log(server.locals.users.dummyUsers);
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
					
					var model = {status : 'success', post: post};
					res.json(model);
				}

			});
		
    });

};

