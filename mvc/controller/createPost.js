var auth = require('../helper/auth'),
	PostModel = require('../model/DBPostModel');

exports = module.exports = function (server) {

    server.get('/createPost', auth.validateSession, function (req, res) {

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

		var post = new PostModel({
				title: req.body.title,
				latitude : req.body.latitude,
				longitude : req.body.longitude,
				desc : req.body.desc,
				email :  req.session.user.email || 'guest',
				categeory : req.body.categeory
            });
        
        var errMsg,
            success = false;

        post.save(function(err){
            if(err) {
               console.log("Error in inserting post");
            } else {
                success = true;
            }
        });


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

		res.json(model);
    });

};