var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Pets = new Schema({
  date: {type: Date, required: true},
  pet_name: {type : String, required: true},
  pet_content: {type: String, required: true},
});

module.exports = mongoose.model('Pets', Pets);
