import React from 'react';
import WishlistDisp from './WishlistDisp'
export default class FavNews extends React.Component{

  constructor(){

    super();
this.state={saveddata:[]};
this.wish=this.wish.bind(this);
this.UpdComments=this.UpdComments.bind(this)

  }
 wish(){
// calling the saved data
  $.ajax({
  url: "http://localhost:8080/news/view",
  type: "GET",
  dataType: 'JSON',
  // data:this.props.newsdata,
  success : function(msg)

  { var savedarr=$.map(msg,function(e1){return e1;})
  this.setState({saveddata:savedarr});
    }.bind(this),

  error: function(err){
    console.log(err);
  }.bind(this)
  });
  }
componentDidMount(){

  this.wish();
}

deleteNews(msg){
   var myData=this.state.saveddata;
   var index=myData.findIndex(function(element){
     return element.title===msg.title;
   });
   if(index!==-1){
     myData.splice(index,1);
     console.log(myData);
     this.setState({saveddata:myData});
   }
}
 UpdComments(T,C){
     var myData=this.state.saveddata;
     var index=myData.findIndex(function(element){
       return element.title===T;
     });
     if(index!==-1){
       myData[Index].Comments=C;
       console.log(myData);
       this.setState({saveddata:myData});
     }
}






render(){
var saveobj=this.state.saveddata.map(function(news){
  //console.log(news)
  return (<WishlistDisp data={news} dele={this.deleteNews.bind(this)} upd={this.UpdComments.bind(this)} />)
}.bind(this))


return(<div>
{saveobj}
</div> )

    }
}
