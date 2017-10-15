var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render( 'index' , {"title":"第三組"});
});

router.get('/milestone1', function(req, res, next){
  res.render('milestone1', {"title":"Milestone1"});
});


router.get('/milestone2', function(req, res, next){
  res.render('milestone2', {"title":"Milestone2"});
});


router.get('/option1', function(req, res, next){
  res.render('option1', {"title":"Option1"});
});

router.get('/option2', function(req, res, next){
  res.render('option2',{"title":"Option2"});
});

router.get('/option3', function(req, res, next){
  res.render('option3',{"title":"Option3"});
});
/*
router.get('/milestone2', function(req, res, next){
  res.render('milestone2');
});

router.get('/milestone3', function(req, res, next){
  res.render('milestone3');
});

router.get('/milestone4', function(req, res, next){
  res.render('milestone4');
});

router.get('/milestone5', function(req, res, next){
  res.render('milestone5');
});

router.get('/milestone6', function(req, res, next){
  res.render('milestone6');
});
*/
/*router.get('/member1', function(req, res, next){
  res.render('member1');
});*/
/*
router.get('/member2', function(req, res, next){
  res.render('member2');
});

router.get('/member3', function(req, res, next){
  res.render('member3');
});

router.get('/member4', function(req, res, next){
  res.render('member4');
});

router.get('/member5', function(req, res, next){
  res.render('member5');
});

*/
module.exports = router;
