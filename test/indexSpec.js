var should = require("chai").should(),
assert = require ("chai").assert,
supertest = require("supertest"),
app = require("../bin/www");
var user=require("../routes/users");
var news=require("../routes/news");
var url=supertest("http://localhost:8080");
var require=require('supertest');
var server=require.agent('http://localhost:8080');



describe("Testing the first route", function(err){
it("- POST is testing", function(done){
 var body = {
      "Username": "admin",
      "password": "admin"
  };
 url
     .post("/login/save")
     .send(body)
     .expect(200)
     .end(function(err,res){

       assert.equal(" inserted in database",res.text, "res.text is not matching with inserted");
       //res.text.should.be.equal("Hello!");
         done();
     });
});
});

describe("Testing the second route", function(err){
  it("- POST is testing", function(done){
   var body = {
     "username": "Sat456",
"password": "token456"
    };
   server
       .post("/login/login")
       .send(body)
       .expect(200)
       .end(function(err,res){

         assert.equal("welcome to login",res.text, "res.text is not matching with welcome to login");
         //res.text.should.be.equal("Hello!");
           done();
       });
  });

it("- POST is testing", function(done){

 server
     .post("/news/save")
     .send({

   author: "Matthew Lynley",
   title: "Twitter’s CTO Adam Messinger is leaving the company along with VP of product Josh McFarland",
   description: "Twitter CTO Adam Messinger, who has been the company's CTO for almost four years and with the company for five years, said today he was leaving the company...",
   url: "http://social.techcrunch.com/2016/12/20/twitters-cto-adam-messinger-is-leaving-the-company/",
   urlToImage: "https://tctechcrunch2011.files.wordpress.com/2016/11/twitter-140-media.png?w=640&amp;h=360&amp;crop=1 (91KB) ",
   publishedAt: "2016-12-20T20:50:01Z"

})
     .expect(200)
     .end(function(err,res){
       if (err) {
                      throw err;
              }
     //  assert.equal("welcome to login",res.text, "res.text is not matching with inserted");
       res.text.should.be.equal(" saved in database");
         done();
     });
});
it("- PUT is testing", function(done){

 server
     .put("/news/update")
     .send({

   author: "Matthew Lynley",
   title: "Twitter’s CTO Adam Messinger is leaving the company along with VP of product Josh McFarland",
   description: "Twitter CTO Adam Messinger, who has been the company's CTO for almost four years and with the company for five years, said today he was leaving the company...",
   url: "http://social.techcrunch.com/2016/12/20/twitters-cto-adam-messinger-is-leaving-the-company/",
   urlToImage: "https://tctechcrunch2011.files.wordpress.com/2016/11/twitter-140-media.png?w=640&amp;h=360&amp;crop=1 (91KB) ",
   publishedAt: "2016-12-20T20:50:01Z"

})
     .expect(200)
     .end(function(err,res){
       if (err) {
                      throw err;
              }
     //  assert.equal("welcome to login",res.text, "res.text is not matching with inserted");
       res.text.should.be.equal("News updated");
         done();
     });
});
it("- DELETE is testing", function(done){

 server
     .delete("/news/delete")
     .send({
     title: "Twitter’s CTO Adam Messinger is leaving the company along with VP of product Josh McFarland"

})
     .expect(200)
     .end(function(err,res){
       if (err) {
                      throw err;
              }
      assert.equal("data removed",res.text, "res.text is not matching with data removed");
      // res.text.should.be.equal("data removed");
         done();
     });
});
});
