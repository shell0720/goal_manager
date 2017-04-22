var express = require('express');
var router = express.Router();
var path = require('path');
var Pets = require('../models/pets.js');

//setting up goal manager rounter
router.get("/", function(req, res){
  Pets.find({}, function(err, data){
    if (err){
      console.log(err);
    }
    res.send(data);
  });
});

router.post("/", function(req,res){
  var addedPet = new Pets ({
    "date": Date.now(),
    "pet_email": req.body.pet_email,
    "pet_name": req.body.pet_name,
    "pet_content":req.body.pet_content,
  });
  addedPet.save(function(err, data){
    if(err){
      console.log(err);
    }
    res.send(data);
  });
});

router.delete('/:id', function(req,res){
  console.log(req.params);
  Pets.findByIdAndRemove(req.params.id, function(err, data){
    if (err) console.log(err);
    res.send(data);

  });
});

module.exports = router;
