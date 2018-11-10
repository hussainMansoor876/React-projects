import React, { Component } from 'react';
import './../../App.css';
import './../Login/Login.css';

class SignUp extends Component {
  constructor(props){
    super(props);
    this.state = {
      user : {
      name : '',
      email : '',
      password : ''
      }
    }
    this.login = this.login.bind(this);
    this.change = this.change.bind(this);
    this.submit = this.submit.bind(this);
  }

  login(){
    this.props.log();
  }

  change(val){
    const key = val.target.name;
    this.setState({
      user : { ...this.state.user , [key] : val.target.value}
    })
  }

  submit(){
    const {user} = this.state;
    console.log(user);
    if(user.name && user.email && user.password){
      localStorage.setItem('name',user.name)
      localStorage.setItem('email',user.email)
      localStorage.setItem('password',user.password)
      this.login()
    }
  }

  render() {
    const {name,email,password} = this.state.user
    return (
      <div>
         <form>
         <label>Name</label>
        <input type="text" name="name" value={name} onChange={this.change} placeholder="Your name.." />
        <label>Email</label>
        <input type="email" name="email" value={email} onChange={this.change} placeholder="Your email.." />

        <label>Password</label>
        <input type="password" name="password" value={password} onChange={this.change} placeholder="Your password.." />
        <input type="button" value="Submit" onClick={this.submit} />
        <h1>Or</h1>
      <button className='button2' onClick={this.login}>LogIn</button>
      </form>
    </div>

    );
  }
}

export default SignUp;
