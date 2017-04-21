var express = require('express');
var router = express.Router();
var path = require('path');
var Groups = require('../models/group.js');

//setting up goal manager rounter
router.get("/", function(req, res){
  Groups.find({}, function(err, data){
    if (err){
      console.log(err);
    }
    res.send(data);
  });
});

router.post("/", function(req,res){
  var addedGroup = new Groups({
    "date": req.body.date,
    "group_name": req.body.group_name,
    "group_content":req.body.group_content,
  });
  addedGroup.save(function(err, data){
    if(err){
      console.log(err);
    }
    res.send(data);
  });
});

router.delete('/:id', function(req,res){
  console.log(req.params);
  Groups.findByIdAndRemove(req.params.id, function(err, data){
    if (err) console.log(err);
    res.send(data);

  });
});

module.exports = router;
