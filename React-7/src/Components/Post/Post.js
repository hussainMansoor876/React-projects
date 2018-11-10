import React, { Component } from "react";
import './../../App.css';
import FbImageLibrary from 'react-fb-image-grid';



class Post extends Component{
    constructor(props){
        super(props);
    }

    render(){
      // console.log(this.props)
      return(
        <div className="container">
          <div>
        <FbImageLibrary images={this.props.images} width={this.props.width}/>
        </div>
        </div>
      )
    }
    
}

export default Post;
