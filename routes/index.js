var express = require('express');
var router = express.Router();
var mongoose = require( 'mongoose' );
var User     = mongoose.model( 'User' );

/* GET home page. */
router.get('/', function(req, res, next) {
  /*new User({
    account    : "1",
    password  : "2",
    firstname   : "3",
    lastname  : "4",
    description : "5",
    photo	: "6",
    updated_at : Date.now()
  }).save( function( err, todo, count ){
    res.render( 'index' );
  });*/
  res.render( 'index' );
});

router.get('/milestone1', function(req, res, next){
  res.render('milestone1');
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
router.get('/member1', function(req, res, next){
  res.render('member1');
});
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
