var PostModel = require('../model/DBPostModel');
exports = module.exports = function (server) {

	"use strict";


	server.get('/removePost/:id', function (req, res) {
		var id = req.params.id,
			model,
			errmsg = null,
			post = null;

			PostModel.remove({"_id": id}, function(err, post) {
				if (err) {
					console.log(err);
					errmsg = err;
					var model = {status : 'error', msg: err};
					res.json(model);
				} else {
					
					var model = { 
						viewName: 'posts/postRemoved',
						master: 'public/templates/master',
						status : 'success'
					};
					//res.json(model);
					res.render(model.master, model);
				}

			});
		
    });
    

};

