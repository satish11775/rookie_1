var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
//Postman-URL::(http://localhost:9090/bbc)
router.post('/bbc', function(req, res, next) {
/*  console.log("Inside Post Req");
//console.log(req.body);

var articleNew=req.body.articles;
console.log("Length is "+articleNew.length);

//for(var i=0;i<articleNew.length;i++){

//  console.log(articleNew[i].title);
      res.send(articleNew[i].title); */

});
/*key value
redish
neo4j
mongo db
casendra*/
module.exports = router;
