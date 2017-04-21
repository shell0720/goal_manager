var express = require('express');
var router = express.Router();
var path = require('path');
var Tutors = require('../models/tutor.js');

//setting up goal manager rounter
router.get("/", function(req, res){
  Tutors.find({}, function(err, data){
    if (err){
      console.log(err);
    }
    res.send(data);
  });
});

router.post("/", function(req,res){
  var addedTutor = new Tutors({
    "date": req.body.date,
    "tutor_name": req.body.tutor_name,
    "tutor_content":req.body.tutor_content,
  });
  addedTutor.save(function(err, data){
    if(err){
      console.log(err);
    }
    res.send(data);
  });
});

router.delete('/:id', function(req,res){
  console.log(req.params);
  Tutors.findByIdAndRemove(req.params.id, function(err, data){
    if (err) console.log(err);
    res.send(data);

  });
});

module.exports = router;
