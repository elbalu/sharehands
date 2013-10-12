// Bring Mongoose into the app
var mongoose = require( 'mongoose' ),
	env, 
	dbURI,
	mongo =  {
       "hostname":"localhost",
       "port":27017,
       "username":"",
       "password":"",
       "name":"",
       "db":"service"
	};

if(process.env.VCAP_SERVICES){
    env = JSON.parse(process.env.VCAP_SERVICES);
    mongo = env['mongodb-1.8'][0]['credentials'];
} 

function generate_mongo_url(obj){
	obj.hostname = (obj.hostname || 'localhost');
	obj.port = (obj.port || 27017);
	obj.db = (obj.db || 'service');
	if(obj.username && obj.password){
       return "mongodb://" + obj.username + ":" + obj.password + "@" + obj.hostname + ":" + obj.port + "/" + obj.db;
	} else{
       return "mongodb://" + obj.hostname + ":" + obj.port + "/" + obj.db;
	}
}

dbURI = generate_mongo_url(mongo);

// Create the database connection
mongoose.connect(dbURI);

// CONNECTION EVENTS
// When successfully connected
mongoose.connection.on('connected', function () {
  console.log('Mongoose default connection open to ' + dbURI);
});

// If the connection throws an error
mongoose.connection.on('error',function (err) {
  console.log('Mongoose default connection error: ' + err);
});

// When the connection is disconnected
mongoose.connection.on('disconnected', function () {
  console.log('Mongoose default connection disconnected');
});

// If the Node process ends, close the Mongoose connection
process.on('SIGINT', function() {
  mongoose.connection.close(function () {
    console.log('Mongoose default connection disconnected through app termination');
    process.exit(0);
  });
});


// BRING IN YOUR SCHEMAS & MODELS
// For example
//require('./../model/DBUserModel');