var auth = require('../helper/auth'),
    UserModel = require('../model/DBUserModel');;

exports = module.exports = function (server) {

	"use strict";

	server.get('/login', function (req, res) {

		req.model = {
            viewName: 'register/login',
            master: 'public/templates/master',
            data: {
                title: 'Log in'
            }     
        };
        
        res.render(req.model.master, req.model);

	});

	server.post('/login', function (req, res) {
        var email = req.body.email,
            password = req.body.password;
		
            auth.getUser (email, function(err, user) {
                    if (err) {
                        res.redirect("/login");
                    } else if(user[0] && user[0].password == password) {
                        req.session.user = user;
                        res.redirect("/createPost");
                    } else {
                        res.redirect("/login");
                    }
            });
	});

	 server.get('/logout', function (req, res) {
        var session = req.session,
            user = session.user;
        req.logOut();
        delete session.user;
        res.redirect('/');
    });
};