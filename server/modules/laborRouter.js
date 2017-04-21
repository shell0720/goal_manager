var express = require('express');
var router = express.Router();
var path = require('path');
var Labors = require('../models/labor.js');

//setting up goal manager rounter
router.get("/", function(req, res){
  Labors.find({}, function(err, data){
    if (err){
      console.log(err);
    }
    res.send(data);
  });
});

router.post("/", function(req,res){
  var addedLabor = new Labors({
    "date": req.body.date,
    "labor_name": req.body.labor_name,
    "labor_content":req.body.labor_content,
  });
  addedLabor.save(function(err, data){
    if(err){
      console.log(err);
    }
    res.send(data);
  });
});

router.delete('/:id', function(req,res){
  console.log(req.params);
  Labors.findByIdAndRemove(req.params.id, function(err, data){
    if (err) console.log(err);
    res.send(data);

  });
});

module.exports = router;
