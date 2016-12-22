import React from 'react';
import Displaynews from './Displaynews';
export default class Newsgen extends React.Component{

  constructor(){

    super();
  }




render(){
console.log(this.props.arrref)
var newsre=this.props.arrref.map(function(x){
return (<Displaynews newsdata={x}/>);
})

return(<div>
{newsre}

</div> )

    }
}
