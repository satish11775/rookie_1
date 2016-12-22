import React from 'react';

export default class Sibi extends React.Component{

  search(){
  var data1=document.getElementById('src').value;
  this.props.data(data1);
console.log('Sucess');
   }


render(){

  return(
    <div>

 <div className="container">
<div className="col-md-12">
<center>
<label for="src"><h2><strong><img src="http://www.uic.edu.my/wp-content/uploads/2015/03/news-hub.png" alt="news-hub" style={{"width":"50%"},{"height":"50%"}}/></strong> </h2></label><br></br>
<br></br>

  <form className="navbar-form" role="search">
    <div className="input-group add-on col-md-6">
      <input className="form-control" placeholder="Search" name="srch-term" id="src" type="text" style={{'width':'100%'}}/>
      <br></br>
      <br></br>
      <br></br>
       <div class="input-group-btn col-md-6">
<button className="btn btn-default" type="button" onClick={this.search.bind(this)}><i className="glyphicon glyphicon-search"></i>Search</button>

      </div>
    </div>
  </form>
  </center>
  </div>
  </div>



</div>

)
}
}
