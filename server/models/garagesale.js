var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Garage = new Schema({
  date: {type: Date, required: true},
  gs_name: {type : String, required: true},
  gs_info: {type: String, required: true},
});

module.exports = mongoose.model('Garage', Garage);
