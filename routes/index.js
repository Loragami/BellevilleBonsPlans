var express = require('express');
var router = express.Router();
var validator = require('validator');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/theend', function(req, res, next) {
  res.render('theend', { title: 'The End', errors : [] });
});

// var something = function() {
//     console.log('something')
//   }
//
// button(onclick='something()') Click


module.exports = router;
