var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Tools = new Schema({
  date: {type: Date, required: true},
  tool_email: {type: String, required: true},
  tool_name: {type : String, required: true},
  tool_info: {type: String, required: true},
});

module.exports = mongoose.model('Tools', Tools);
