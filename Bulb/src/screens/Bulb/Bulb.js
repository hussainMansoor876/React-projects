import React, { Component } from 'react';
import offBulb from './bulb.jpg';
import '../../App.css';

class Bulb extends Component {
  constructor(props){
    super(props);
    console.log(props)
    this.on = this.on.bind(this);
    this.broke = this.broke.bind(this);
  }

  on(){
    this.props.onKaro(true);
  }

  broke(){
    this.props.broked(true)
  }

  render() {
    return (
      <div>
          <img src={offBulb} className="bulb" onClick={this.broke}/>  
          <button className="button1" onClick={this.on}>On</button>   
      </div>
    );
  }
}

export default Bulb;
