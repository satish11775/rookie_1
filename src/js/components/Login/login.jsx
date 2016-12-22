
import React from 'react';
import {browserHistory} from 'react-router'


export default class Login extends React.Component
  {

/*this is a ajax function for the URL of authenticate of login ID and password*/
Loginfun()
{
var uname=document.getElementById('userid').value;
var pass=document.getElementById('password').value;

    $.ajax({
    url: "http://localhost:8080/login/login",
    type: "POST",
    data:'username='+uname+'&password='+pass,
    success : function(msg)
    {
    alert("successfully loggedin");
    console.log("successfully loged to database");
      browserHistory.push('/home');
    }.bind(this),
    error: function(err){
      alert("check the username and password");
   }.bind(this)
  });

}
/*closed ajax function*/



    render()
     {
        return(
      <div>
        <div className="container">

            <div className="row">
                    <div className="col-lg-4">
                  <div className="well" style={{border:'1px solid skyblue' }}>
                    <h3>Login</h3>
      			<form action="" >
      				<div className="form-signin">
                <i className="glyphicon glyphicon-user"></i>
      					<label htmlFor="userid" ><em>Username:</em></label>
      					<input type="text" id="userid" className="form-control input-md" placeholder="Enter username"/>
                	<p className="help-block">*required</p>
      				</div>
      				<div className="form-group">
                <i className="glyphicon glyphicon-lock"></i>
      					<label htmlFor="password" ><em>password:</em></label>

      					<input type="password" id="password" className="form-control input-md" placeholder="Enter Password"/>
                	<p className="help-block">*required</p>
      				</div>
      				
      				<button type="button" className="btn btn-lg btn-primary btn-block btn-signin" onClick={this.Loginfun.bind(this)}>Login </button><br/><br/>
              <a href="#" className="forgot-password">
                Forgot the password?
            </a>
      			</form>
              </div>
            </div>
        </div>
        </div>
  </div>


            )
    }
 }
