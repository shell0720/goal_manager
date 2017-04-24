var mongoose = require("mongoose");

// var mongoURI = "mongodb://localhost/goal_manager";

 var mongoURI =
'mongodb://mongodb://localhost/goal_manager'||
'mongodb://xiaoxiao:123@ds117821.mlab.com:17821/heroku_n6rx4jq0';

mongoose.connect(mongoURI);

var MongoDB = mongoose.connection;

MongoDB.on("error", function(err){
  console.log("Mongo Connection Error: ", err);
});

MongoDB.on("open", function(){
  console.log("Mongo Connection Open");
});

module.exports = MongoDB;
