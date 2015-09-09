var express = require('express');
var router = express.Router();
var Lobster = require('../models/lobster');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//get all lobsters
router.get('/lobsters', function(req, res, next) {
   Lobster.find({}, function(err, data){
  if(err){
    res.json({'message': err});
  } else {
    res.json(data);

   }
  });
});

//get single lobster
router.get('/lobster/:id', function(req, res, next) {
   Lobster.findById(req.params.id, function(err, data){
  if(err){
    res.json({'message': err});
  } else {
    res.json(data);
   }
  });
});

router.post('/lobsters', function(req, res, next) {
   newLobster = new Lobster ({
    name: req.body.name,
    hobbies: req.body.hobbies
   });
   newLobster.save(function(err, data){
      if(err){
        res.json({'message': err});
      } else {
        res.json(data);
      }
   });
});

//Put single lobster
router.put('/lobster/:id', function(req, res, next){
    var update = {
      name:req.body.name,
      zoo:req.body.zoo,
      nemesis:req.body.nemesis
    };
  Lobster.findByIdAndUpdate(req.params.id, update, function(err, data){
    if(err){
     res.json({'message': err});
    } else {
      res.json(data);
    }
  });
});


//Delete single lobster
router.delete('/lobster/:id', function(req, res, next){
  Lobster.findByIdAndRemove(req.params.id, function(err, data){
    if(err){
     res.json({'message': err});
    } else {
      res.json(data);
    }
  });
});

module.exports = router;
