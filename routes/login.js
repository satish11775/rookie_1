var express = require('express');
var router = express.Router();
var users=require('../models/login_use.js');
var passport=require('passport');
var Strategy=require('passport-local').Strategy;
var connectflash=require('connect-flash');



/* Post login listing. */
router.post('/save', function(req, res, next) {
  var userver=new users();
  if(req.body){
  userver.username=req.body.username;
  userver.password=req.body.password;
  userver.save(function(err){if(err){
      console.log('Error in database');
    res.send('Error in database');
  }else{
    console.log(' inserted in database');
    res.send(' inserted in database');
  }

  });

  }


});

router.delete('/delete', function(req, res, next) {
  //var userver=new users();
  //console.log('Deleted'+req.body.username+req.body.password);
//  userver.username=req.body.username;
  //userver.password=req.body.password;
users.findOne({username:req.body.username}, function(err,user)
{
  if(err)
  {
    res.send("three is an error");
  }
  else
  {
    user.remove(function(err1,userremove){
      if(err1)
      {
        res.send("three is an error");
      }
      else
      {
        res.send("data removed");
      }


    })


  }
});


});
router.post('/login',
passport.authenticate('local'),
function(req, res) {

  res.send('welcome to login');
});


router.put('/update', function(req, res, next) {
  users.update({username: req.body.username}, {$set:{password: req.body.password}},  function (err){
    if(err)
    {
      res.send("there is an error");
    }
    else
    {
      res.send("Password updated");


      }
    });

  });

  router.put('/update/usr', function(req, res, next) {
    users.update({username: req.body.username}, {$set:{username: req.body.username}},  function (err){
      if(err)
      {
        res.send("there is an error");
      }
      else
      {
        res.send("Username updated");


        }
      });

    });









module.exports = router;
