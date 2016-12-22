
import 'file?name=[name].[ext]!../index.html';

import React from 'react';
import ReactDOM from 'react-dom';
var {browserHistory,hashHistory, Route, Router, IndexRoute,reset,Router,Route,Link }
  = require('react-router');

//import About from './component/About.jsx';
//import Home from './components/Home.jsx';
import FavNews from './components/Retrive/FavNews.jsx';
import NavBar from './components/Navbar.jsx';
import MainComponent from './components/MainComponent.jsx';
import Login from './components/Login/login.jsx'
import Register from './components/Register/Register.jsx'
class Main extends React.Component{

render(){

return (
<div>
<NavBar/>
  <br/><br/><br/><br/>
    {this.props.children}
</div>
)
}
}
ReactDOM.render(
<Router history={browserHistory}>

          {/* <Route path="/" component={Main}/>
           <Route path="/home" component={MainComponent}/>
           <Route path="/about" component={About}/>
             <Route path="/contact" component={Contact}/>*/}

             <Route path="/" component={Main} >
             <IndexRoute component={MainComponent}/>
           <Route path="/home" component={MainComponent}/>
          <Route path="/favNews" component={FavNews}/>
          <Route path="/Login" component={Login}/>
          <Route path="/Register" component={Register}/>
      {/*  <Route path="/contact" component={Contact}/>*/}
             </Route>


</Router>,document.getElementById('content'));
