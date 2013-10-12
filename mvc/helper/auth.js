module.exports = {
	/**
	 * @param {Object} request
	 * @param {Object} response
	 * @param {Function} next
	 */
	validateSession: function (req, res, next) {

		"use strict";

		if (req.session.loggedIn) {
			next();
		} else {
			res.redirect('/login');
			return;
		}
	}
};