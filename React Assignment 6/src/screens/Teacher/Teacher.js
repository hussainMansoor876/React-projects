import React from 'react';
import '../../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'



export default class Teacher extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      teacherHelp : true,
      sendData : false
    }
  }

  static getDerivedStateFromProps(props,state){
    console.log(props.teacherHelp)
    return {teacherHelp : props.teacherHelp}
  }

 sendDataToKid() {
	const furtherSteps = ['step3', 'step4', 'step5']
    //Send this data to Kid.js
    this.setState({
      teacherHelp : false,
      sendData : true
    })
    this.props.furth(furtherSteps)
 }


 render() {
    //  console.log('Teacher',this.props)
   const {teacherHelp,sendData} = this.state;
   return (
    <div className="container">
     {teacherHelp && !sendData && <div className='panel pink'>
     <button onClick={this.sendDataToKid.bind(this)}>Get Help From Teacher</button>
     <hr/>
     </div>}
     </div>
   );
 }
}
