var express = require('express');
var router = express.Router();
var validator = require('validator');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// var something = function() {
//     console.log('something')
//   }
//
// button(onclick='something()') Click


module.exports = router;
