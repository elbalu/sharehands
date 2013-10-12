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
		res.redirect("/createPost");
	});

	 server.get('/logout', function (req, res) {
        var session = req.session,
            user = session.user;
        req.logOut();
        delete session.user;
        res.redirect('/');
    });
};