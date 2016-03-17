// Require things
var express  = require('express');										// Express REST API
var app      = express();    											// Express app for routing and stuff.
var path 	 = require('path');
var bodyParser = require('body-parser');                           		// Create our app w/ express
var request = require('request');

// Session stuff
var cookieParser = require('cookie-parser');							// Used to parse cookies and deal with sessions
var session = require('express-session');								// Used to deal with sessions in express

//Mongoose and mongodb connection information
var uri = "mongodb://localhost:27017/kylederosha.xyz";							// Connect to the local mongodb.
var mongodb = require('mongodb');
var morgan = require('morgan');
var appPort = 3004;	

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//Use cookieparser and session
app.use(cookieParser());
app.use(session({
	secret: 'DATArainWeLoveSimplicity',
	saveUninitialized: false,
	resave: false
}));

app.use(express.static(__dirname + '/public')); 						// Use the public directory for static resources.

app.listen(appPort);
console.log("App is listening on port: " + appPort);