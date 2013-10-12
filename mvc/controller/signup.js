var mongoose = require( 'mongoose' ),
    User = require('../model/DBUserModel');


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
		//var user = new UserModel(server.locals.users.dummyUsers.length+1, req.body.name, req.body.orgname, req.body.email, req.body.phone, req.body.accountType, req.body.address);
		//server.locals.users.dummyUsers.push(user);

        var user = new User({
                name : req.body.name,
                email : req.body.email,
                phone : req.body.phone,
                accountType : req.body.accountType,
                address : req.body.address,
                orgname : req.body.orgname,
                password : req.body.password
            });
        
        var errMsg,
            success = false;

        user.save(function(err){
            if(err) {
                console.log(err);
                if (error.code === 11000){
                    errMsg = "User already exist";
                }
            } else {
                success = true;
            }
        });

		//var model = {status : 'success', viewName: 'signupSuccess', user: user};
		//res.json('sucess', model);
		req.session.loggedIn = true;
		req.session.user = user;
		
		req.model = {
            viewName: 'register/success',
            master: 'public/templates/master',
            data: {
                title: 'Register',
                user: user
            },
            
        };
        
        res.render(req.model.master, req.model);
	});
};