/*global UserModel:true, module:true */


var mongoose = require('mongoose'),
	Schema = mongoose.Schema;


var DBPostSchema = new Schema({
	title : String,
	latitude : Number,
	longitude : Number,
	desc : String,
	email : String,
	date: { type: Date, default: Date.now },
	type : String,
	name: String,
	buttonAction: String
});


var DBPostModel = mongoose.model('DBPostModel', DBPostSchema);

module.exports = DBPostModel;