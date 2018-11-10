import React from 'react';
import swal from 'sweetalert';
import 'bootstrap/dist/css/bootstrap.min.css'

export default class Kid extends React.Component {

 constructor(props) {
   super(props);
   this.state = { emotion: 'nervous', danceSteps: [], currentStepIndex: 0, startedPerforming: false } ;
   this.increament = this.increament.bind(this);
   this.qualified = this.qualified.bind(this);
  }
  
  componentDidMount(){
    this.setState({
      danceSteps:['step1', 'step2']
    })
  }
  componentDidUpdate(props,state){
    console.log(props.stars)
    if(this.props.stars != props.stars){
      setTimeout(()=>{
         swal("You are qualified now and you can Leave the Show");
         this.qualified();
        }, 3000)
    }
  }

  qualified() {
    this.setState({startedPerforming: false})
    this.props.teacherHelp1();
  }
  

  static getDerivedStateFromProps(props,state){
    console.log(props)
    // console.log(state)
    return props.applaud ? {danceSteps : [...state.danceSteps,...props.furtherSteps], emotion : 'happy'} : 
    props.furtherSteps.length > state.danceSteps.length ? {danceSteps : [...state.danceSteps,...props.furtherSteps], startedPerforming : true} : {startedPerforming : true}
  }

  componentWillUnmount(){
    setTimeout(()=>{
      swal('Kid Leave the show happily')
      setTimeout(()=>{
        this.props.judgeLeaveShow()
      },2000)
    },2000)
  }

  increament(){
    const {currentStepIndex,danceSteps} = this.state;
    // console.log(currentStepIndex)
    if(currentStepIndex <= 3){
      this.setState({
        currentStepIndex: currentStepIndex + 1
      })
    }
    if(!danceSteps[currentStepIndex]){
      this.setState({
        currentStepIndex : 0
      })
    }
  }
  
  render() {
    const {dressColor} = this.props;
    const {danceSteps, emotion, startedPerforming, currentStepIndex} = this.state;
    console.log(this.state)
   return (
     <div className="container">
      <div>dressColor: { dressColor }</div>
	<div style={{backgroundColor: dressColor, width: 50, height: 50}}></div>
      <div>Emotion: { emotion }</div>
      <hr/>
        {startedPerforming && <div>
    Current Step: {danceSteps[currentStepIndex] ? danceSteps[currentStepIndex] : "Dance Bhool Gaye Teacher se help lelo"}
    <div className='panel'>
    <button onClick={this.increament}>Perform Next Step</button>
    </div>
  </div>}
  </div>
   );
 }
}
Kid.defaultProps = { dressColor: 'red', applaud: false, furtherSteps: [] };

