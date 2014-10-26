// modules
var express						= require('express');
var app								= express();
var bodyParser				= require('body-parser');
var methodOverride		= require('method-override');

// configuration

var db = require('./config/db');

// set port
var port = process.env.PORT || 8080;

// connects to specific db 
mongoose.connect('mongodb://localhost:27017/scotch');

app.use(bodyParser.json());

// not sure what exactly these do yet. Find out ----------------------------
// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override'));
// -------------------------------------------------------------------------

// set static files location
app.use(express.static(__dirname + '/public'));

// routes
require('./app/routes')(app); // configure routes

//start app =====
app.listen(port);
console.log('Listening on port: ' + port);

// expose app
exports = module.exports = app;
