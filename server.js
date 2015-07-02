// Require our dependencies
var express = require('express'),
        exphbs = require('express-handlebars'),
        http = require('http'),
        mongoose = require('mongoose'),
        twitter = require('twitter'),
        routes = require('./routes');
        //config = require('./config'),
        //streamHandler = require('./utils/streamHandler');


// create an express instance andset a port variable
var app = express();
var port = process.env.PORT || 8080;

// set handlebars as  the templating engine

app.engine('handlebars',exphbs({defaultLayout:'main'}));
app.set('view engine','handlebars');


mongoose.connect('mongodb://localhost/react-tweets');

//create a new twitter instsance 
//var twit = new twitter(config.twitter);

//Index route
app.get('/',routes.index);

//set as /public as our static content directory
app.use('/',express.static(__dirname+'/public/'));


// Fire this bitch up and start our server
var server = http.createServer(app).listen(port,function(){
    console.log('Express server listening on port ' + port);
});




