import React from 'react';
export default class WishlistDisp extends React.Component{
constructor(){
  super();
  this.del=this.del.bind(this);
  this.Update=this.Update.bind(this);
  this.toUpdate=this.toUpdate.bind(this);
  this.state={Commentsdata:""}
}
toUpdate(arg){
  this.setState({Commentsdata:arg.target.value});
}

del(news){

  $.ajax({
   url: "http://localhost:8080/news/delete",
   type: "DELETE",
   data: this.props.data,
   success : function(msg){
     this.props.dele(this.props.data);
     console.log("deleted");
 }.bind(this),
   error: function(err){
     console.log("error in displaying articles");
   }.bind(this)
});
}
Update(){
var obj={
  Title:this.props.data.Title,
  Comments:this.state.Commentsdata
}

console.log(obj)
  $.ajax({
   url: "http://localhost:8080/news/update",
   type: "PUT",
  data:obj,

   success : function(){
console.log("updated")
this.props.upd(obj.Title,obj.Comments);
window.location.reload();
 }.bind(this),
   error: function(err){
     console.log("error in Updating Comments");
   }.bind(this)
});
}





  render(){
  return(

    <div>
  <section className="jumbotron" style={{"margin-top":"10%"}}>
  <div className="row">
<div className='col-sm-6'>
      <center>  <img src={this.props.data.UrlToImage}  width="50%" height="50%" /></center>
      </div>
      <div className='col-sm-6'>
      <div className="well">
        <left><h4><strong>{this.props.data.Title}</strong></h4><br></br>

          <p><em>{this.props.data.Description}</em></p></left>
          </div>
          <div className="well">Post Comments:{this.props.data.Comments}</div>
         <textarea rows="2" cols="50" placeholder="Enter your comments..."   onChange={this.toUpdate.bind(this)}>

               </textarea>
               <div className="well">
            <left><button type="button" className="btn btn-danger" onClick={this.del.bind(this)}>DELETE</button>&nbsp;&nbsp;
          <button type="button" className="btn btn-success" onClick={this.Update.bind(this) }>Save</button>

            </left>
            </div>
          </div>
          </div>
        </section>
  </div>
)


  }
}
