var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Groups = new Schema({
  date: {type: Date, required: true},
  group_name: {type : String, required: true},
  Group_content: {type: String, required: true},
});

module.exports = mongoose.model('Groups', Groups);
