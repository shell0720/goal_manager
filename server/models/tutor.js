var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Tutors = new Schema({
  date: {type: Date, required: true},
  tutor_name: {type : String, required: true},
  tutor_content: {type: String, required: true},
});

module.exports = mongoose.model('Tutors', Tutors);
