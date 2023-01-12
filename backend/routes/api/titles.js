var router = require('express').Router();
var mongoose = require('mongoose');
var Item = mongoose.model('Item');

// return a list of titles
router.get('/', function(req, res, next) {
  Item.find().distinct('title').then(function(title){
    return res.json({title: title});
  }).catch(next);
});

module.exports = router;
