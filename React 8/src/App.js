import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'

class App extends Component {
  constructor(){
    super();
    this.state = {
      issues : [
        {
          title : 'JSX not working',
          comments : 4,
          isOpen : true,
          isFavorite : false,
          date : new Date
        },
        {
          title : 'Not starting project',
          comments : 6,
          isOpen : false,
          isFavorite : false,
          date : new Date
        },
        {
          title : 'JSX not working',
          comments : 9,
          isOpen : false,
          isFavorite : true,
          date : new Date
        },
        {
          title : 'Babel is not defined',
          comments : 2,
          isOpen : true,
          isFavorite : false,
          date : new Date
        },
        {
          title : 'kivy error',
          comments : 7,
          isOpen : true,
          isFavorite : false,
          date : new Date
        }
      ]
    }
  }

  change(index){
    const {issues} = this.state;
    issues[index].isFavorite = true
    this.setState({
      issues
    })
  }

  render() {
    const {issues} = this.state;
    return (
      <div>
        <br/>
        <br/>
        <div className='App'>
        <input/>
        <hr/>
      </div>
      {issues.map((v,i)=>{
        return <div key={i}>
          {v.isOpen ? <h2><i className="fa fa-check-circle" style={{color:'green'}}></i>{v.title}</h2> : <h2><i className="fa fa-check-circle"></i>{v.title}</h2> }
          <h2>{v.date.toLocaleString()}</h2>
          <h4>
          <i className="fa fa-comments"> {v.comments}</i> | 
          {v.isFavorite ? <i className="fa fa-heart" style={{color:'red'}} onClick={()=> this.change(i)}></i> : <i className="fa fa-heart-o" style={{color:'red'}} onClick={()=> this.change(i)}></i>}
          </h4>
          <hr/>
        </div>
      })}
      </div>
    );
  }
}

export default App;
