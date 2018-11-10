import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      text : '',
    }
  }
  hello(){
    this.setState({
      text : 'hello'
    })
    console.log(this.state.text)
    }
  render() {
    return (
      <div className="App">
      <div className="todo">
        <input type="text" />
        <button onClick = {()=>this.hello()}> Add</button>
      </div>
      </div>
    );
  }
}

export default App;
