import React, { Component } from 'react';
import swal from 'sweetalert';
import './App.css';
import Kid from './screens/Kid/Kid';
import Teacher from './screens/Teacher/Teacher';
import Judge from './screens/Judge/Judge';
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component {
  constructor(){
    super()
    this.state={
      text : 'hello',
      volume : 0,
      furtherSteps : [],
      applaud : false,
      startedPerforming: false,
      stars : 0,
      teacherHelp : true,
      qualified : false,
      judgeLeave : false
    }
    this.further = this.further.bind(this);
    this.kidEmotion = this.kidEmotion.bind(this)
    this.teacherHelp1 = this.teacherHelp1.bind(this)
    this.judgeLeaveShow = this.judgeLeaveShow.bind(this)
  }
  static getDerivedStateFromProps(props,state){
    // console.log('getDerivedStateFromProps props',props)
    // console.log('getDerivedStateFromProps state',state)
    return {volume : 5}
  }

  further(arr){
    // console.log('ye return hua',arr)
    this.setState({
      furtherSteps : arr
    })
  }

  kidEmotion(val,val1){
    console.log("ye mila",val1)
    this.setState({
      applaud : val,
      stars : val1
    })
  }

  teacherHelp1(){
    console.log("Mansoor")
    this.setState({
      teacherHelp : false,
      qualified : true
    })
  }
  judgeLeaveShow(){
      this.setState({
        judgeLeave : true
    })
  }

  render() {
    const {volume,furtherSteps,applaud,stars,teacherHelp,qualified,judgeLeave} = this.state
    // console.log(volume)
    return (
      <div className="container-flex">
        <div className="col-md-6 col-md-offset-3">
        {!qualified && <Kid dressColor='blue' furtherSteps={furtherSteps} applaud={applaud} stars={stars} teacherHelp1={this.teacherHelp1} judgeLeaveShow={this.judgeLeaveShow}/>}
        <hr/>
        <Teacher furth={this.further} teacherHelp={teacherHelp}/>
        {!judgeLeave && <Judge applaudKid={this.kidEmotion}/>}
        </div>
      </div>
    );
  }
}

export default App;
