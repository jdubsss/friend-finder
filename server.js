
//Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");


// Express Configuration
var app = express();
var PORT = process.env.PORT || 3000;


// BodyParser cleans up data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));


// Routes
require('./app/routing/apiRoutes.js')(app); 
require('./app/routing/htmlRoutes.js')(app);


// Listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});






