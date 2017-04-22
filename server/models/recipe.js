var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Recipes = new Schema({
  date: {type: Date, required: true},
  recipe_email: {type: String, required: true},
  recipe_name: {type : String, required: true},
  recipe_content: {type: String, required: true},
});

module.exports = mongoose.model('Recipes', Recipes);
