import React, { Component } from 'react';
import bulbLight from './light_bulb.png';
import '../../App.css';

class LightBulb extends Component {
  constructor(props){
    super(props);
    console.log(props)
    this.on = this.on.bind(this);
    this.broke = this.broke.bind(this);
  }

  on(){
    this.props.offKaro(false);
  }

  broke(){
    this.props.broked(true)
  }

  render() {
    return (
      <div>
          <img src={bulbLight} className="bulb" onClick={this.broke}/>
          <button className="button1" onClick={this.on}>Off</button>
      </div>
    );
  }
}

export default LightBulb;
