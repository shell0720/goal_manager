var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

//ROUTES
var router = require('./modules/index.js');
var goalRouter = require('./modules/goalRouter.js');
var db = require('./modules/db.js');

// Models
var Goals = require('./models/goals.js');

//BODYPARSER
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//URL
app.use('/goal', goalRouter);
app.use('/', router);

//Setting local server
app.set("port",(process.env.PORT || 3000));
app.listen(app.get("port"),function(){
  console.log("Listening on port: ", app.get("port"));
});

module.exports = app;
