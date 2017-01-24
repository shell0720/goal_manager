var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Goals = new Schema({
  date: {type: String, required: true},
  goal_name: {type : String, required: true},
  goal_length: {type: String, required: true},
});

module.exports = mongoose.model('Goals', Goals);
