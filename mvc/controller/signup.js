var mongoose = require( 'mongoose' );


exports = module.exports = function (server) {

	"use strict";

	server.get('/register/:type', function(req, res) {


/*	UserModel.create({
		firstName : "Abilash",
		lastName : "badri",
		phone : "4087075646",
		email : "asd@aa.com",
		address : "2211 n firts strere",
		accountType : "personal"
	}, function(err, user) {
	    if (err) {
	      console.log(err);
	      strOutput = 'Oh dear, we\'ve got an error';
	      model = {user : null, status : 'error', viewName: 'signupFail'};
	    } else {
	      console.log('User created: ' + user);
	      model = {user : user, status : 'success', viewName: 'signupSuccess'};
    	}
  }	); */

	console.log(server.locals);

	var model = {status : 'success', viewName: 'signupSuccess', localse: server.locals.users.dummyUsers};

	res.json('sucess', model);
	});

	server.post('/register', function(req, res) {
		var user = new UserModel(server.locals.users.dummyUsers.length+1, req.body.fname, req.body.lname, req.body.email, req.body.phone, req.body.accountType, req.body.address);
		server.locals.users.dummyUsers.push(user);
		var model = {status : 'success', viewName: 'signupSuccess', user: user};
		res.json('sucess', model);
	});
};