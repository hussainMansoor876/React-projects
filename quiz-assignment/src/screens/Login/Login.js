import React, { Component } from 'react';
import './../../App.css';
import './Login.css'
import swal from 'sweetalert';

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      email : '',
      password : '',
      userEmail : localStorage.getItem('email'),
      userPassword : localStorage.getItem('password')
    }
    this.sign = this.sign.bind(this);
    this.submit = this.submit.bind(this);
    this.check = this.check.bind(this);
    console.log(props)
  }

  sign(){
    this.props.sign();
  }

  submit(){
    const {email,userEmail,password,userPassword} = this.state;
    if(email === userEmail && password === userPassword){
      localStorage.setItem('login',true)
      this.props.userLogin();
    }
    else{
      swal({
        title: "Incorrect Email or Password!",
        icon: "warning",
      });
    }
  }

  check(val){
    const key = val.target.name;
    this.setState({
      [key] : val.target.value
    })
  }
  
  render() {
    const {email,password} = this.state;
    return (
      <div>
          <form>
        <label>Email</label>
        <input type="email" name="email" value={email} onChange={this.check} placeholder="Your email.." />

        <label>Password</label>
        <input type="password" name="password" value={password} onChange={this.check} placeholder="Your password.." />
        <input type="button" value="Submit" onClick={this.submit} />
      </form>
      <h1>Or</h1>
      <button className='button2' onClick={this.sign}>SignUp</button>
    </div>

    );
  }
}

export default Login;
