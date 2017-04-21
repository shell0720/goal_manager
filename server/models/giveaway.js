var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Giveaways = new Schema({
  date: {type: Date, required: true},
  giveaway_name: {type : String, required: true},
  giveaway_content: {type: String, required: true},
});

module.exports = mongoose.model('Giveaways', Giveaways);
