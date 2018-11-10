import React, { Component } from 'react';
import Broken from './broken_bulb.jpg';
import '../../App.css';

class BrokenBulb extends Component {
  constructor(props){
    super(props);
    this.broke = this.broke.bind(this);
    console.log(props)
  }

  broke(){
    this.props.broked(false)
  }

  render() {
    return (
      <div>
          <img src={Broken} className="bulb" onClick={this.broke}/>        
      </div>
    );
  }
}

export default BrokenBulb;
