var express = require('express');
var router = express.Router();
var path = require('path');
var Kids = require('../models/kids.js');

//setting up goal manager rounter
router.get("/", function(req, res){
  Kids.find({}, function(err, data){
    if (err){
      console.log(err);
    }
    res.send(data);
  });
});

router.post("/", function(req,res){
  var addedKid = new Kids({
    "date": Date.now(),
    "kid_email": req.body.kid_email,
    "kid_name": req.body.kid_name,
    "kid_content":req.body.kid_content,
  });
  addedKid.save(function(err, data){
    if(err){
      console.log(err);
    }
    res.send(data);
  });
});

router.delete('/:id', function(req,res){
  console.log(req.params);
  Kids.findByIdAndRemove(req.params.id, function(err, data){
    if (err) console.log(err);
    res.send(data);

  });
});

module.exports = router;
