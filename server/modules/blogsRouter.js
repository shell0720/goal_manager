var express = require('express');
var router = express.Router();
var path = require('path');
var Blogs = require('../models/blogs.js');

//setting up goal manager rounter
router.get("/", function(req, res){
  Blogs.find({}, function(err, data){
    if (err){
      console.log(err);
    }
    res.send(data);
  });
});

router.post("/", function(req,res){
  var addedBlog = new Blogs({
    "date": req.body.date,
    "blog_name": req.body.blog_name,
    "blog_content":req.body.blog_content,
  });
  addedBlog.save(function(err, data){
    if(err){
      console.log(err);
    }
    res.send(data);
  });
});

router.delete('/:id', function(req,res){
  console.log(req.params);
  Blogs.findByIdAndRemove(req.params.id, function(err, data){
    if (err) console.log(err);
    res.send(data);

  });
});

module.exports = router;
