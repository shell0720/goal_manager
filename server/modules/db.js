var mongoose = require("mongoose");

// var mongoURI = "mongodb://localhost/goal_manager";

 var mongoURI =
'mongodb://mongodb://localhost/goal_manager'||
'mongodb://michelle:12345@ds117821.mlab.com:17821/heroku_n6rx4jq0';


var MongoDB = mongoose.connect(mongoURI).connection;

MongoDB.on("error", function(err){
  console.log("Mongo Connection Error: ", err);
});

MongoDB.on("open", function(){
  console.log("Mongo Connection Open");
});

module.exports = MongoDB;
