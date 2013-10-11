var mongoose = require( 'mongoose' );


exports = module.exports = function (server) {

	"use strict";

	server.get('/register', function (req, res) {
        req.model = {
            viewName: 'register/register',
            master: 'public/templates/master',
            data: {
                title: 'Register'
            }
        };
        res.render(req.model.master, req.model);
    });

    server.get('/register/:id', function (req, res) {
        req.model = {
            viewName: 'register/'+req.params.id,
            master: 'public/templates/master',
            data: {
                title: 'Register'
            }
        };
        res.render(req.model.master, req.model);
    });

	server.post('/register', function(req, res) {
		var user = new UserModel(server.locals.users.dummyUsers.length+1, req.body.name, req.body.orgname, req.body.email, req.body.phone, req.body.accountType, req.body.address);
		server.locals.users.dummyUsers.push(user);
		
		//var model = {status : 'success', viewName: 'signupSuccess', user: user};
		//res.json('sucess', model);

		req.model = {
            viewName: 'register/success',
            master: 'public/templates/master',
            data: {
                title: 'Register'
            },
            user: user
        };

        console.log(user);
        res.render(req.model.master, req.model);
	});
};