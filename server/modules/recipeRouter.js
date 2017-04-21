var express = require('express');
var router = express.Router();
var path = require('path');
var Recipes = require('../models/recipe.js');

//setting up goal manager rounter
router.get("/", function(req, res){
  Recipes.find({}, function(err, data){
    if (err){
      console.log(err);
    }
    res.send(data);
  });
});

router.post("/", function(req,res){
  var addedRecipe = new Recipes({
    "date": req.body.date,
    "recipe_name": req.body.recipe_name,
    "recipe_content":req.body.recipe_content,
  });
  addedRecipe.save(function(err, data){
    if(err){
      console.log(err);
    }
    res.send(data);
  });
});

router.delete('/:id', function(req,res){
  console.log(req.params);
  Recipes.findByIdAndRemove(req.params.id, function(err, data){
    if (err) console.log(err);
    res.send(data);

  });
});

module.exports = router;
