/* 
	GET home page */
	var appJs = require('../app.js');
	exports.loggedin = function(req,res){
		var session = req.session;
		var user =  req.user;
		session.user =  user;
		console.log(user);
        res.redirect('/');
	}