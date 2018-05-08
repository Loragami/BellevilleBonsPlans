var express = require('express');
var router = express.Router();
var validator = require('validator');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('connection', { title: 'Connection', errors : [] });
});


router.post('/',function(req,res,next){
  console.log(req.body)
  var errors = []
  if (req.body.prenom.length > 30 || req.body.prenom.length == 0){
    errors.push('il faut que ton prenom soit entre 1 et 30 caractères')
  }
  if (req.body.nom.length > 30 || req.body.nom.length == 0){
    errors.push('il faut que ton nom soit entre 1 et 30 caractères')
  }
  if (parseInt(req.body.age) < 0 || parseInt(req.body.age) > 100 || req.body.age.length == 0 ){
    errors.push('il faut que ton age soit entre 0 et 100')
  }
  if (!validator.isEmail(req.body.mail)){
    errors.push('il faut que ton email soit valide stp')
  }
  if (errors.length > 0){
    res.render('index', {title:'Errors', errors:errors})
  } else {
    res.send('ok')
  }
})
module.exports = router;
