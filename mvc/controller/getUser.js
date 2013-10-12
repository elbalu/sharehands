exports = module.exports = function (server) {

	"use strict";

	server.get('/getUser/:id', function (req, res) {

		console.log(server.locals.users.dummyUsers);
		var id = req.params.id,
			model,
			user = null,
			users = server.locals.users.dummyUsers;

		if (id === 'all') {
			user = users;
		} else {
			user = users.filter(function (usr) {
	        	return usr.id === id;
	    	});
		} 

		if(user.length) {
			var model = {status : 'success', user: user};
		} else {
			var model = {status : 'failure', user: user};
		}

        
		res.json(model);
    });

};