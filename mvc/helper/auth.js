var User = require('../model/DBUserModel');
module.exports = {
	/**
	 * @param {Object} request
	 * @param {Object} response
	 * @param {Function} next
	 */
	validateSession: function (req, res, next) {

		"use strict";
		req.session.redirectUrl = req.url;
		console.log(req.url);
		if (req.session.user) {
			next();
		} else {
			res.redirect('/login');
			return;
		}
	},

	getUser: function (email, callback) {
		User.find({"email": email}, callback); 
	}
};