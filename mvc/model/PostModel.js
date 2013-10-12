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
PostModel = function () {

	"use strict";

	this.id = null;
	this.title = null;
	this.location = null;
	this.desc = null;
	this.user = null;
	this.categeory = null;
	this.type = null;

};

PostModel = function (id, title, categeory, location, desc, user, type) {

	"use strict";

	this.id = id;
	this.name = title;
	this.location = location;
	this.desc = desc;
	this.user = user;
	this.categeory = categeory;
	this.type = type;
};



module.exports = PostModel;
