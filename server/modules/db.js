var mongoose = require("mongoose");

var mongoURI = "mongodb://localhost/goal_manager";
var MongoDB = mongoose.connect(mongoURI).connection;

MongoDB.on("error", function(err){
  console.log("Mongo Connection Error: ", err);
});

MongoDB.on("open", function(){
  console.log("Mongo Connection Open");
});

module.exports = MongoDB;
