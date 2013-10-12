/* 
	GET home page */
	var appJs = require('../app.js');
	exports.loggedin = function(req,res){
		var session = req.session;
		var user =  req.user;
		session.user =  user;
		console.log(req.session.user.emails[0].value);
		if(req.session.redirectUrl){
			res.redirect(req.session.redirectUrl);	
			delete req.session.redirectUrl;
		} else {
        	res.redirect('/');
        }
	}