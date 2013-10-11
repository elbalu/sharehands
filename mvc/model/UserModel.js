/*global UserModel:true, module:true */

/*
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;


var userSchema = new Schema({
	firstName : String,
	lastName : String,
	phone : Number,
	email : String,
	address : String,
	accountType : String
});


var UserModel = mongoose.model('UserModel', userSchema);
*/


/*global UserModel:true, module:true */
UserModel = function () {

	"use strict";

	this.id = null;
	this.firstName = null;
	this.lastName = null;
	this.familyName = null;
	this.phone = null;
	this.email = null;
	this.accountType = null;
	this.address = null;
};

UserModel = function (id, firstName, lastName, email, phone, accountType, address) {

	"use strict";

	this.id = id;
	this.firstName = firstName;
	this.lastName = lastName;
	this.phone = phone;
	this.email = email;
	this.accountType = accountType;
	this.address = address;
};


UserModel.prototype = {

};


module.exports = UserModel;
