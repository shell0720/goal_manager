var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Labors = new Schema({
  date: {type: Date, required: true},
  labor_name: {type : String, required: true},
  labor_content: {type: String, required: true},
});

module.exports = mongoose.model('Labors', Labors);
