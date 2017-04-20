var express = require('express');
var router = express.Router();
var path = require('path');
var Tools = require('../models/tools.js');

//setting up goal manager rounter
router.get("/", function(req, res){
  Tools.find({}, function(err, data){
    if (err){
      console.log(err);
    }
    res.send(data);
  });
});

router.post("/", function(req,res){
  var addedTool = new Tools({
    "date": req.body.date,
    "tool_name": req.body.tool_name,
    "tool_info":req.body.tool_info,
  });
  addedTool.save(function(err, data){
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
