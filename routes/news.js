var express = require('express');
var router = express.Router();
var news= require('../models/News_use.js');
var users=require('../models/login_use.js');


/* GET users listing. / BBC:API:d362bac1a7d24f968fdd0fd6281dea23 / */
/*router.get('/', function(req, res, next) {

  req.send('https://newsapi.org/v1/articles?source=bbc-news&sortBy=top&apiKey=d362bac1a7d24f968fdd0fd6281dea23');
});*/


/* Post to save news./ BBC:API:d362bac1a7d24f968fdd0fd6281dea23   */
router.post('/save',isLoggedIn,function(req, res, next) {
  var userver=new news();
  if(req.body){
  userver.Author=req.body.author;
  userver.Title=req.body.title;
  userver.Description=req.body.description;
  userver.Url=req.body.url;
  userver.UrlToImage=req.body.urlToImage;
  userver.save(function(err){if(err){
      console.log('Error in database');
    res.send('Error in database');
  }else{
    console.log(' saved in database');
  //  window.alert("saved in database");
    res.send(' saved in database');
  }
});
}
});
function isLoggedIn (req, res, next) {
//console.log("hello"+req.user.id+"++++++++");
if(req.isAuthenticated()){
console.log("if of logged in ");
return next()
;}
else {
console.log("else of logged in ");
  res.json('not authenticated');
}
};


/*function AdminisLoggedIn (req, res, next) {
//console.log("hello"+req.user.id+"++++++++");
if(req.body.username==='admin' && req.body.password==='admin'){
console.log("if of logged in ");
return next()
;}
else {
console.log("else of logged in ");
  res.json('not authenticated');
}
};*/

/* View news. */
router.get('/view', function(req, res) {
 news.find({},function(err,allnews){
   if(err) {
     res.send(err);
     console.log('error ocuured');
   }
   else {
    var newsobject={};
     allnews.forEach(function(newss,ind){
       newsobject[newss._id]=newss;

     });
     res.send(newsobject);
   }
 });
});



/* delete news. */
router.delete('/delete', isLoggedIn,function(req, res, next) {
  var request={title:req.body.title};
  {
    if(request)

      news.remove(function(err1,newsremove){
        if(err1)
        {
          res.send("there is an error");
        }
        else
        {
        //  window.alert("data removed");
          res.send("data removed");
        }
})
}
});



//Updating Comments

router.put('/update',isLoggedIn,function(req, res){

  // console.log(req.body);
   if(req.body)
   {
  var  request1=req.body.Title;
    var request2=req.body.Comments;
   news.update({Title:request1},{$set:{Comments:request2}},function(err){

       if(err) {
         res.send(err);
       }
       else  {
       res.send("News updated");
       }
     });
   }
 });


module.exports = router;
