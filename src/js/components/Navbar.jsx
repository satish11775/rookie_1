var React = require('react');
var {Link} = require('react-router');
export default class NavBar extends React.Component{

render() {
 return(
 <div>
   <nav className="navbar navbar-default navbar-fixed-top">
     <div className="container-fluid">
       <ul className="nav navbar-nav">
           <li><Link to="/home"><span className="glyphicon glyphicon-home" aria-hidden="true"></span> Home</Link></li>
           <li><Link to="/favNews"><span className="glyphicon glyphicon-list-alt" aria-hidden="true"></span> WishList</Link></li>
        {/* <li><Link to="/contact"><span className="glyphicon glyphicon-log-in" aria-hidden="true"></span>Contact Us</Link></li>
      <li><Link to="/about"><span className="glyphicon glyphicon-log-in" aria-hidden="true"></span>About Us</Link></li>*/}
           <li><Link to="/Login">Login <span className="glyphicon glyphicon-log-in" aria-hidden="true"></span> </Link></li>
           <li><Link to="/Register"> SignUp <span className="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> </Link></li>
        </ul>
      </div>
     </nav>
   </div>
 );
}
}
