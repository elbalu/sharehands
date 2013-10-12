var User = require('../model/DBUserModel');
exports = module.exports = function (server) {

	"use strict";

	server.get('/getUser/:email', function (req, res) {

		var email = req.params.email,
			model,
			user = null,
			users = server.locals.users.dummyUsers;

		User.find({"email": email}, function(err, user) {
				if (err) {
					console.log(err);
					errmsg = "User not found";
					var model = {status : 'error', msg: err};
					res.json(model);
				} else {
					var model = {status : 'success', user: user};
					res.json(model);
				}

			});
    });

};