var express = require('express');
var router = express.Router();
var validator = require('validator');

/* GET home page. */
router.get('/sport', function(req, res, next) {
  res.render('sport', { title: 'Sport' });
});
router.get('/art', function(req, res, next) {
  res.render('art', { title: 'Art' });
});
router.get('/musique', function(req, res, next) {
  res.render('musique', { title: 'Musique' });
});

module.exports = router;
