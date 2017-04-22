var express = require('express');
var router = express.Router();
var path = require('path');
var Garage = require('../models/garagesale.js');

//setting up goal manager rounter
router.get("/", function(req, res){
  Garage.find({}, function(err, data){
    if (err){
      console.log(err);
    }
    res.send(data);
  });
});

router.post("/", function(req,res){
  var addedGarage = new Garage({
    "date": Date.now(),
    "gs_email": req.body.gs_email,
    "gs_name": req.body.gs_name,
    "gs_info":req.body.gs_info,
  });
  addedGarage.save(function(err, data){
    if(err){
      console.log(err);
    }
    res.send(data);
  });
});

router.delete('/:id', function(req,res){
  console.log(req.params);
  Garage.findByIdAndRemove(req.params.id, function(err, data){
    if (err) console.log(err);
    res.send(data);

  });
});

module.exports = router;
