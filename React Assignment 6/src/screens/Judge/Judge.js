import React from 'react';
import swal from 'sweetalert';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css'



export default class Judge extends React.Component {
    constructor(props) {
        super()
    this.state = {
        stars: 0,
        available: false
    }
    this.applaud = this.applaud.bind(this)
    this.provideStars = this.provideStars.bind(this)
    }

    shouldComponentUpdate(){
        const {stars} = this.state;
        if(stars >= 5){
            return false
        }
        else{
            return true
        }
    }
    componentDidUpdate(){
        const {stars} = this.state;
        {stars === 5 && this.props.applaudKid(true,stars)}
    }

    componentWillUnmount(){
        swal('The judges also leave the show')
    }

    applaud() {
        const {stars} = this.state;
        //Send this applaud status to Kid.js
        this.props.applaudKid(true,stars)
    }
    provideStars() {
    const {stars} = this.state;
    if(stars < 5 ){
        this.setState({stars: stars+1})    
        }
    }

    render() {
        console.log('judges',this.props)
    const {stars, available} = this.state;
    return (
        <div className="container">
        <div className='panel blue'>
        <button type="button" onClick={this.applaud}>
        Appreciate performance
        </button>
        <hr/>
        </div>
        <div className='panel'>
        <button type="button" onClick={this.provideStars}>
        Provide stars
        </button>
        </div>
        <hr/>
        Kid is available: {available}
        Stars gained: {stars}
        <hr/>
    </div>
            );
        }
    }