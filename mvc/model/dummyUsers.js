/*global require:true, module:true */
var UserModel = require("../model/UserModel"),
	dummyUsers = [];

var user = new UserModel ("balu", "badri");

dummyUsers = [
	{
		id : '1',
		name : 'Abilash',
		orgname : null,
		email : 'Abilash@gmail.com',
		phone : '4089312225',
		accountType : 'personal',
		address : '2211 n first street, san jose, ca, 95131' 
	},
	{
		id : '2',
		name : 'balu',
		orgname : null,
		email : 'asd@gmail.com',
		phone : '4089312225',
		accountType : 'personal',
		address : '2211 n first street, san jose, ca, 95131' 
	},
	{
		id : '3',
		name : 'Ramesh',
		orgname : 'Lingams charity',
		email : 'ramesgh@gmail.com',
		phone : '4089312225',
		accountType : 'org',
		address : '2211 n first street, san jose, ca, 95131' 
	}
];


module.exports = {
	dummyUsers: dummyUsers
};