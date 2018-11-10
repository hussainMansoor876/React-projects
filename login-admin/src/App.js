import React, { Component } from 'react';
import './App.css';
import swal from 'sweetalert'

class App extends Component {
  constructor(){
    super();
    this.state = {
      user : false,
      addForm : false,
      email : 'mansoor@gmail.com',
      pass : 'hussain',
      userEmail : '',
      userPass : '',
      verify : null,
      data : {
        firstName : '',
        lastName : '',
        email : '',
        sallery : '',
        jobDate : '',
        update : false,
        currentIndex : null
      },
      EmployeeData : []
    }
    this.updateEmail = this.updateEmail.bind(this);
    this.updatePass = this.updatePass.bind(this);
    this.auth = this.auth.bind(this);
    this.change = this.change.bind(this);
    this.submit = this.submit.bind(this);
    this.editing = this.editing.bind(this);
  }

  updateEmail(e){
    this.setState({userEmail: e.target.value})
    console.log(this.state.userEmail)
  }

  updatePass(e){
    this.setState({userPass: e.target.value})
  }

  auth(){
    if(this.state.email === this.state.userEmail && this.state.pass === this.state.userPass) {
      swal({
        title :"Successfully Log In",
        icon : "success"
      });
      this.setState({user : true})
    }
    else{
      swal({
        title :"Incorrect Email or Password",
        icon : "warning"
      });
    }
  }

  change(val){
    var name = val.target.name;
    // console.log(name);
    this.setState({ data: { ...this.state.data, [name]: val.target.value } });
    // console.log(this.state.data)
  }
  submit(){
    const {EmployeeData,data} = this.state;
    if(data.firstName && data.lastName && data.email && data.sallery && data.jobDate){
      EmployeeData.push(data)
      console.log(data)
      this.setState({
        addForm : false,
        EmployeeData,
        data : {
          firstName : '',
          lastName : '',
          email : '',
          sallery : '',
          jobDate : ''
        }
      })
    }
    else{
      swal({title : 'Please inset all fields',icon : 'warning'})
    }
    // console.log(EmployeeData)
  }
  // Class Work

  renderLogin(){
    return <div>
    <label>Email</label>
    <input type="email" name="userEmail" placeholder="Your Email.." value={this.state.userEmail} onChange={this.updateEmail}/>

    <label>Password</label>
    <input type="password" name="userPassword" placeholder="Your Password.." value={this.state.userPass} onChange={this.updatePass}/>
    <input type="button" value="Submit" onClick={this.auth}/>
    </div>
  }

  edit(index){
    const {EmployeeData} = this.state;
    // console.log(EmployeeData[index].firstName)
    this.setState({
      data : {
        firstName : EmployeeData[index].firstName,
        lastName : EmployeeData[index].lastName,
        email : EmployeeData[index].email,
        sallery : EmployeeData[index].sallery,
        jobDate : EmployeeData[index].jobDate
      },
      update : true,
      currentIndex : index
    })
  }

  editing(){
    const {data,EmployeeData,currentIndex} = this.state;
    console.log(data)
    EmployeeData[currentIndex] = data;
    this.setState({
      EmployeeData,
      data : {
        firstName : '',
        lastName : '',
        email : '',
        sallery : '',
        jobDate : ''
      },
      update : false
    })
  }

  updated(){
    const {data} = this.state;
    return <div>
    <label>First Name</label>
    <input type="text" placeholder="First Name.." name="firstName" value={data.firstName} onChange={this.change}/>

    <label>Last Name</label>
    <input type="text" placeholder="Last Name.." name="lastName" value={data.lastName} onChange={this.change}/>

    <label>Email</label>
    <input type="email" placeholder="Email.." name="email" value={data.email} onChange={this.change}/>

    <label>Sallery</label>
    <input type="number" placeholder="Sallery.." name="sallery" value={data.sallery} onChange={this.change}/>

    <label>Job Start Date</label>
    <input type="date" placeholder="Job Start Date.." name="jobDate" value={data.jobDate} onChange={this.change}/>
    <input type="button" value="Update" onClick={this.editing}/>
    </div>
  }

  delete(index){
    const {EmployeeData} = this.state;
    EmployeeData.splice(index,1)
    this.setState({EmployeeData})
  }

  showTable(){
    const {EmployeeData} = this.state;
    return <div>
      <div>
      <button className="button1" onClick={() => this.setState({addForm : true})}>Add form</button>
      </div>
        <div>
          <table>
            <tbody>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Sallery</th>
              <th>Job Start Date</th>
              <th>Editing</th>
            </tr>
            {EmployeeData.map((val,index)=>{
              return <tr key={index}>
              <td>{val.firstName}</td>
              <td>{val.lastName}</td>
              <td>{val.email}</td>
              <td>{val.sallery}</td>
              <td>{val.jobDate}</td>
              <td>
                <button className="button1" onClick={()=> this.edit(index)}>Edit</button>
                <button className="button1" onClick={()=> this.delete(index)}>Delete</button>
                </td>
              </tr>
            })}
            </tbody>
          </table>
        </div>
        
    </div>
  }

  addEmployeeForm(){
    const {data} = this.state;
    return <div>
    <label>First Name</label>
    <input type="text" placeholder="First Name.." name="firstName" value={data.firstName} onChange={this.change}/>

    <label>Last Name</label>
    <input type="text" placeholder="Last Name.." name="lastName" value={data.lastName} onChange={this.change}/>

    <label>Email</label>
    <input type="email" placeholder="Email.." name="email" value={data.email} onChange={this.change}/>

    <label>Sallery</label>
    <input type="number" placeholder="Sallery.." name="sallery" value={data.sallery} onChange={this.change}/>

    <label>Job Start Date</label>
    <input type="date" placeholder="Job Start Date.." name="jobDate" value={data.jobDate} onChange={this.change}/>
    <input type="button" value="Submit" onClick={this.submit}/>
    </div>
  }

  render() {
    const {user,addForm,update} = this.state;
    return (
      <div className="App">
          {!user && this.renderLogin()}
          {update && this.updated()}
          {user && !addForm && this.showTable()}
          {user && addForm && this.addEmployeeForm()}
      </div>
    );
  }
}

export default App;
