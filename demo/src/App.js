import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      text : '',
      list : [],
      currentIndex : ''
    }
    this.updateText = this.updateText.bind(this)
    this.addItem = this.addItem.bind(this);
  }

  updateText(val){
    this.setState({
      text : val.target.value
    })
  }
  addItem(){
    const {text,list} = this.state;
    const obj = {
      text,
      date : new Date().toString(),
      show : true,
    }
    list.push(obj)
    this.setState({list,text:''})
    console.log(list)
  }
  hide(index){
    const {list} = this.state;
    list[index].show = false;
    this.setState({list})
  }
  show(index){
    const {list} = this.state;
    list[index].show = true;
    this.setState({list})
    console.log(list)
  }

  render() {
    const {text,list} = this.state;
    return (
      <div className="App">
        <div>
    <label>Email</label>
    <input type="text" name="userEmail" placeholder="Text.." value={text} onChange={this.updateText}/>
    <input type="button" value="Submit" onClick={this.addItem}/>
      </div>
    {text.split('').reverse()}
      <div>
        <ul>
          {list.map((item,index)=>{
            return <li key={index}>
            {item.show && <p>{item.text} | {item.date}</p>}
            {item.show ? <button onClick={()=>{this.hide(index)}}>Hide</button> : <button onClick={this.show.bind(this,index)}>Show</button>}
            </li>
          })
        }
        </ul>
      </div>
    </div>
    );
  }
}

export default App;
