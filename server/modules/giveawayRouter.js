var express = require('express');
var router = express.Router();
var path = require('path');
var Giveaways = require('../models/giveaway.js');

//setting up goal manager rounter
router.get("/", function(req, res){
  Giveaways.find({}, function(err, data){
    if (err){
      console.log(err);
    }
    res.send(data);
  });
});

router.post("/", function(req,res){
  var addedGiveaways = new Giveaways({
    "date": req.body.date,
    "giveaway_name": req.body.giveaway_name,
    "giveaway_content":req.body.giveaway_content,
  });
  addedGiveaways.save(function(err, data){
    if(err){
      console.log(err);
    }
    res.send(data);
  });
});

router.delete('/:id', function(req,res){
  console.log(req.params);
  Giveaways.findByIdAndRemove(req.params.id, function(err, data){
    if (err) console.log(err);
    res.send(data);

  });
});

module.exports = router;
