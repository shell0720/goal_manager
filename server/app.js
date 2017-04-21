var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

//ROUTES
var router = require('./modules/index.js');
var goalRouter = require('./modules/goalRouter.js');
var toolRouter = require('./modules/toolRouter.js');
var garageRouter = require('./modules/garageRouter.js');
var giveawayRouter = require('./modules/giveawayRouter.js');
var blogsRouter = require('./modules/blogsRouter.js');
var groupRouter = require('./modules/groupRouter.js');
var kidsRouter = require('./modules/kidsRouter.js');
var petsRouter = require('./modules/petsRouter.js');
var recipeRouter = require('./modules/recipeRouter.js');
var tutorRouter = require('./modules/tutorRouter.js');
var laborRouter = require('./modules/laborRouter.js');
var db = require('./modules/db.js');

// Models
var Goals = require('./models/goals.js');
var Tools = require('./models/tools.js');
var Garage = require('./models/garagesale.js');
var Blogs = require('./models/blogs.js');
var Giveaways = require('./models/giveaway.js');
var Groups = require('./models/group.js');
var Kids = require('./models/kids.js');
var Labor = require('./models/labor.js');
var Pets = require('./models/pets.js');
var Recipe = require('./models/recipe.js');
var Tutor = require('./models/tutor.js');


//BODYPARSER
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//URL
app.use('/goal', goalRouter);
app.use('/tool', toolRouter);
app.use('/garagesale', garageRouter);
app.use('/blogs', blogsRouter);
app.use('/giveaway', giveawayRouter);
app.use('/group', groupRouter);
app.use('/kids', kidsRouter);
app.use('/labor', laborRouter);
app.use('/pets', petsRouter);
app.use('/recipe', recipeRouter);
app.use('/tutor', tutorRouter);


app.use('/', router);

//Setting local server
app.set("port",(process.env.PORT || 3000));
app.listen(app.get("port"),function(){
  console.log("Listening on port: ", app.get("port"));
});

module.exports = app;
