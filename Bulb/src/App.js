import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BrokenBulb from './screens/Broken/Broken';
import Bulb from './screens/Bulb/Bulb';
import LightBulb from './screens/Light/Light';

class App extends Component {
  constructor(){
    super()
    this.state = {
      on : false,
      broked : false
    }
    this.bulbOn = this.bulbOn.bind(this);
    this.broke = this.broke.bind(this);
  }

  bulbOn(bool){
    this.setState({on : bool})
  }

  broke(bool){
    this.setState({broked : bool})
  }

  render() {
    const {on,broked} = this.state;
    return (
      <div className="App">
        {!on && !broked && <Bulb onKaro={this.bulbOn} broked={this.broke} />}
        {on && !broked && <LightBulb offKaro={this.bulbOn} broked={this.broke}/>}
        {broked && <BrokenBulb broked={this.broke}/>}

      </div>
    )
  }
}

export default App;
