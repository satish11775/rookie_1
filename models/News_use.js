var mongoose=require("mongoose");
var schema=mongoose.Schema;
var newsDetailsSchema=new schema({
  Author:String,
  Title:String,
  Description:String,
  Url:String,
  UrlToImage:String,
  PublishedAt:String,
  Comments:String
});
module.exports=mongoose.model('NewsDetails',newsDetailsSchema);
