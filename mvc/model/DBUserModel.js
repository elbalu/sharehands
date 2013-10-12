/*global UserModel:true, module:true */

var mongoose = require('mongoose'),
	Schema = mongoose.Schema;



var UserSchema = new Schema({
	name : String,
	email : { type: String, required: true, index: { unique: true } },
	phone : Number,
	accountType : String,
	address : String,
	orgname : String,
	password : { type: String, required: true }
});


UserSchema.methods.authPassword = function(password) {
    return (password === this.password);
};

var DBUserModel = mongoose.model('DBUserModel', UserSchema);

module.exports = DBUserModel;