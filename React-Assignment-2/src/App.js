import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      text :  'Hello World',
      condition : true
    }
  }
  Tabdeeli(){
    console.log('Dabao')
    this.setState({
      text : this.state.condition ? 'Hello Saylani' : 'Hello World',
      condition : !this.state.condition
    })
  }
  myFunc(){
    console.log("Kohli Nahi Hota Tujhsy Chase...")
    // this.setState({
    //   text : this.state.condition ? 'Hello Saylani' : 'Hello World',
    //   condition : !this.state.condition
    // })
  }
  render() {

    var diff1 = 'When we click on this it work but it cannot read property of this thats why it could not read property of "this.setState"'
    var diff2 = 'Arrow function CAll back ()=>{this.myFunc()} when the event fires the function work correctly and "this.setState" work correctly'
    var diff3 = 'Last onClick={this.myFunc.bind(this}} its mean when the button click on this and myFunc call and work correctly and the function knows "this.setState"'
    var last = 'Finally the onClick={this.myFunc.bind(this}} && onClick={()=>this.myFunc()} use when we have to modify the state using "this.setState" and this.myFunc is used only for call something and not used for change state'

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{this.state.text}</h1>
          <button onClick={()=>{this.Tabdeeli()}}>Click Here</button>
        </header>
        {/* <p className="App-intro"> */}

          {/* </p> */}
        <div className="div1">
        <h1>{diff1}
        <button onClick={this.myFunc}>this.myFunc</button><br></br></h1>
        </div>
        <div className="div1">
        <h1>
          {diff2}
          <button onClick={() => this.Tabdeeli()}>() => this.Tabdeeli()</button>
        </h1>
        </div>
        <div className="div1">
        <h1>{diff3}
        <button onClick={this.Tabdeeli.bind(this)}>this.Tabdeeli.bind(this)</button>
        </h1>
        </div>
        <div className="div1">
        <h1>{last}</h1>
        </div>
      </div>
    );
  }
}

export default App;
