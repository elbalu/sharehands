var auth = require('../helper/auth'),
	PostModel = require('../model/DBPostModel');

exports = module.exports = function (server) {

    server.get('/createPost', auth.validateSession, function (req, res) {
    	console.log(req.session.user);
		var model = {
			viewName: 'posts/createPost',
			master: 'public/templates/master',
			data: {
				title: 'Create Post',
				email :  req.session.user.emails ? req.session.user.emails[0].value : req.session.user.email
			}
		};
        
        req.model = model;

        res.render(req.model.master, model);

    });

    server.post('/createPost', function (req, res) {
    	console.log(req.body.type);
		var post = new PostModel({
				title: req.body.title,
				latitude : req.body.latitude,
				longitude : req.body.longitude,
				desc : req.body.desc,
				email :  req.session.user.emails ? req.session.user.emails[0].value : req.session.user.email,
				categeory : req.body.categeory,
				type: req.body.type,
				name: req.session.user.displayName ? req.session.user.displayName : req.session.user.name
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
				viewName: 'posts/success',
				master: 'public/templates/master',
				data: {
					title: 'Posted',
					post: post,
					user: req.session.user || null
				}
			};

		req.model = model;

		//res.json(model);
		res.render(req.model.master, model);
    });

};