var express = require('express');
var router = express.Router();
var validator = require('validator');

/* GET home page. */

router.post('/', function(req, res, next) {
  res.render('categories', { title: 'Catégories' });
});
router.get('/sport', function(req, res, next) {
  res.render('sport', { title: 'Sport' });
});
router.get('/art', function(req, res, next) {
  res.render('art', { title: 'Art' });
});
router.get('/sorties', function(req, res, next) {
  res.render('sorties', { title: 'Sorties et visites' });
});
router.get('/abuse', function(req, res, next) {
  res.render('abuse', { title: 'Signaler un abus' });
});

module.exports = router;
