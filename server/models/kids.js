var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Kids = new Schema({
  date: {type: Date, required: true},
  kid_name: {type : String, required: true},
  kid_content: {type: String, required: true},
});

module.exports = mongoose.model('Kids', Kids);
