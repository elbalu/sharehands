/*global require:true, module:true */
var PostModel = require("../model/PostModel"),
	dummyUsers = [];

var user = new UserModel ("balu", "badri");

dummyPosts = [
	{
		id : 1,
		title : "Help needed for school project",
		location : "33.722016, -117.796672",
		desc : "Need guidance in doing physics school project for 8th grader",
		categeory : "service",
		user : {
				id : '1',
				name : 'Abilash',
				orgname : null,
				email : 'Abilash@gmail.com',
				phone : '4089312225',
				accountType : 'personal',
				address : '2211 n first street, san jose, ca, 95131' 
			}
	},

	{
		id : 2,
		title : "I need scientific calculator",
		location : "36.829155, -119.76722",
		desc : "I am going for high school need a scientific calculator",
		categeory : "goods", 
		user : {
			id : '2',
			name : 'balu',
			orgname : null,
			email : 'asd@gmail.com',
			phone : '4089312225',
			accountType : 'personal',
			address : '2211 n first street, san jose, ca, 95131' 
		}
	},

	{
		id : 3,
		title : "I need 4th grade books",
		location : "34.00555, -118.339364",
		desc : "I am going to 8th grade need help with books",
		user : {
			id : '3',
			name : 'Getoctords',
			orgname : null,
			email : 'ElizaJMenendez@teleworm.us',
			phone : '4089312225',
			accountType : 'personal',
			address : '2211 n first street, san jose, ca, 95131' 
		}
	}
];


module.exports = {
	dummyPosts: dummyPosts
};