var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Blogs = new Schema({
  date: {type: Date, required: true},
  blog_name: {type : String, required: true},
  blog_content: {type: String, required: true},
});

module.exports = mongoose.model('Blogs', Blogs);
