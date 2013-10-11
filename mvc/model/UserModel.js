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
	this.name = null;
	this.familyName = null;
	this.phone = null;
	this.email = null;
	this.accountType = null;
	this.address = null;
	this.orgname = null;
};

UserModel = function (id, name, orgname, email, phone, accountType, address) {

	"use strict";

	this.id = id;
	this.name = name;
	this.orgname = orgname;
	this.phone = phone;
	this.email = email;
	this.accountType = accountType || 'personal';
	this.address = address;
};


UserModel.prototype = {

};


module.exports = UserModel;
