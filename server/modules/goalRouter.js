var express = require('express');
var router = express.Router();
var path = require('path');
var Goals = require('../models/goals.js');

//setting up goal manager rounter
router.get("/", function(req, res){
  Goals.find({}, function(err, data){
    if (err){
      console.log(err);
    }
    res.send(data);
  });
});

router.post("/", function(req,res){
  var addedGoal = new Goals({
    "date": Date.now(),
    "goal_email": req.body.goal_email,
    "goal_name": req.body.goal_name,
    "goal_length":req.body.goal_length,
  });
  addedGoal.save(function(err, data){
    if(err){
      console.log(err);
    }
    res.send(data);
  });
});

router.delete('/:id', function(req,res){
  console.log(req.params);
  Goals.findByIdAndRemove(req.params.id, function(err, data){
    if (err) console.log(err);
    res.send(data);

  });
});

module.exports = router;
