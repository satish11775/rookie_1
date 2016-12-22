
import React from 'react';

import Sn from './Save/searchnews';
import Newsgen from './Save/Newsgen';
//import FavNews from './Retrive/FavNews';


export default class MainComponent extends React.Component{
constructor(){
  super();
  this.state={newsarr:[]};
  this.fetchNewsFromExternalAPI=this.fetchNewsFromExternalAPI.bind(this);

}

fetchNewsFromExternalAPI(msg) {
    $.ajax({
     url: "https://newsapi.org/v1/articles?source="+msg+"&sortBy=top&apiKey=d362bac1a7d24f968fdd0fd6281dea23",
     type: "GET",
     dataType: 'JSON',

     success : function(msg){
     /*msg reprewsents JSON data of news headlines sent back by external API*/
     //console.log(msg);
    // this.state.newsarr={msg.articles};
     this.setState({newsarr:msg.articles});
    // console.log(this.state.newsarr);


   }.bind(this),
     error: function(err){


     }
 });
}

  render(){
      return(
      <div>
<Sn data={this.fetchNewsFromExternalAPI.bind(this)}/>

<Newsgen arrref={this.state.newsarr}/>
</div>
    );
  }
}
