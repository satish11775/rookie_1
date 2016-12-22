import React from 'react';

export default class Displaynews extends React.Component{
constructor(){
  super();
}
savefunction()
{
$.ajax({
url: "http://localhost:8080/news/save",
type: "POST",
dataType: 'JSON',
 data:this.props.newsdata,
success : function(msg)
{ console.log(msg);
console.log("this is coming to save function");

}.bind(this),

error: function(err){
}.bind(this)
});
}

render(){

  return(
    <div>
    <section className="jumbotron" style={{"margin-top":"10%"}}>
    <div className="row">
<div className='col-sm-6'>
        <center>  <img src={this.props.newsdata.urlToImage} style={{ "width":"50%","height":"50%"}} /></center>
        </div>
        <div className='col-sm-6'>
        <div className="well">
          <left><h4><strong>{this.props.newsdata.title}</strong></h4><br></br>

            <p><em>{this.props.newsdata.description}</em></p></left>
            </div>
              <center><button type="button" className="btn btn-primary" onClick={this.savefunction.bind(this)}>Save</button></center>
            </div>
            </div>
          </section>
    </div>
  );

}
}
