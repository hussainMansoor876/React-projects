import React, {Component} from 'react';
import FloatGroup from 'react-float-button';
import './Dashboard.css'
import './w3.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../../node_modules/font-awesome/css/font-awesome.min.css'
import Cards, { Card } from 'react-swipe-deck'
import firebase from '../../firebase'
import swal from 'sweetalert';
import { updateUser } from '../../Redux/Action/authAction'
import { connect } from 'react-redux'

const link = 'https://firebasestorage.googleapis.com/v0/b/meeting-app-27c0d.appspot.com/o/8av2WA2GUmhRyezNdJjdqvO6tA62%2FIMG-20180617-WA0005.jpg?alt=media&token=db75bbc6-deb6-48be-a919-58dbbcbe2cc2'

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userUid : localStorage.getItem('userUid'),
            meeting : false,
            meetingList : {},
            meetingPics : {
                pic1 : '',
                pic2 : '',
                pic3 : ''
            },
            userArray : [],
            loader : true,
            getData : false,
            slideIndex : 1,
            sendReq: [],
            userDataSend: false,
            sendReqData: [],
            sendData: false,
            dummyData: {},
            dummy: false,
            recReq: [],
            recData: {},
            sendToRec: false
        }
        this.setLoader = this.setLoader.bind(this)
        this.gettingData = this.gettingData.bind(this)
        this.setData = this.setData.bind(this)
        this.dummyD = this.dummyD.bind(this)
    }
    componentDidMount(){
        const {userArray,userUid,sendReq,recReq} = this.state
        firebase.database().ref('userList').child(`${userUid}`).once('value',(user)=>{
            let val = user.val()
            let { meetingList } = user.val()
            if(val['meetingList']){
                var { recieve,send } = meetingList
            }
            // console.log('User==>',recieve)
            // console.log(send)
            send && Object.entries(send).forEach((key,value)=>{
                // console.log('key==>',key)
                firebase.database().ref('userList').child(`${key[0]}`).once('value',(user)=>{
                    // console.log('UserSend==>',user.val())
                    let user1 = user.val()
                    sendReq.push(user1)
                    this.setState({
                        sendReq,
                        userDataSend: true
                    })
                })
                // console.log('Value==>',value)
            })
            send && Object.entries(send).forEach((key,value)=>{
                // console.log('key==>',key)
                firebase.database().ref('userList').child(`${key[0]}`).once('value',(user)=>{
                    // console.log('UserSend==>',user.val())
                    let user1 = user.val()
                    sendReq.push(user1)
                    this.setState({
                        sendReq,
                        userDataSend: true
                    })
                })
                // console.log('Value==>',value)
            })

            recieve && Object.entries(recieve).forEach((key,value)=>{
                // console.log('key==>',key)
                firebase.database().ref('userList').child(`${key[0]}`).once('value',(user)=>{
                    // console.log('UserSend==>',user.val())
                    let user1 = user.val()
                    recReq.push(user1)
                    this.setState({
                        recReq
                    })
                })
                // console.log('Value==>',value)
            })
        })
        // var {slideIndex} = this.state
        // this.showSlides(slideIndex);
        var meetingListCopy = Object.assign({},this.state.meetingList)
        this.setLoader()
        firebase.database().ref('userList').child(`${userUid}`).once('value',(user)=>{
          let userData = user.val()
        //   console.log(userData)
          let {beverages,timeDurations} = userData
          Object.entries(beverages).forEach(([key,value])=>{
            beverages[key] && firebase.database().ref(`${key}`).once('value',(user)=>{
                var data = user.val();
                // console.log(data)
                Object.entries(data).forEach(([keys,values])=>{
                    // console.log('keys',keys)
                    if(userUid !== values.userUid){
                        if(!meetingListCopy[values.userUid]){
                            var uid = values.userUid
                            // console.log(uid)
                            var storageRef = firebase.storage().ref(`${uid}/${values.pictures['pic1']}`)
                            storageRef.getDownloadURL()
                                .then((url)=>{
                                    // console.log(url)
                                    values.pictures['pic1'] = url
                                })
                                .catch((err)=>{
                                    console.log(err)
                                })
                            storageRef = firebase.storage().ref(`${uid}/${values.pictures['pic2']}`)
                            storageRef.getDownloadURL()
                                .then((url)=>{
                                    // console.log(url)
                                    values.pictures['pic2'] = url
                                })
                                .catch((err)=>{
                                    console.log(err)
                                })
                            storageRef = firebase.storage().ref(`${uid}/${values.pictures['pic3']}`)
                            storageRef.getDownloadURL()
                                .then((url)=>{
                                    // console.log(url)
                                    values.pictures['pic3'] = url
                                })
                                .catch((err)=>{
                                    console.log(err)
                                })
                            meetingListCopy[values.userUid] = values
                            userArray.push(values)
                            // console.log(userArray)
                            this.setState({
                                meetingList : meetingListCopy,
                                userArray
                            })
                    }
                }
                })
        })
        })
        Object.entries(timeDurations).forEach(([key,value])=>{
            timeDurations[key] && firebase.database().ref(`${key}`).once('value',(user)=>{
                var data = user.val();
                Object.entries(data).forEach(([keys,values])=>{
                    // console.log('keys',keys)
                    if(userUid !== values.userUid){
                        if(!meetingListCopy[values.userUid]){
                            var uid = values.userUid
                            // console.log(values)
                            // console.log(uid)
                            var storageRef = firebase.storage().ref(`${uid}/${values.pictures['pic1']}`)
                            storageRef.getDownloadURL()
                                .then((url)=>{
                                    // console.log(url)
                                    values.pictures['pic1'] = url
                                })
                                .catch((err)=>{
                                    console.log(err)
                                })
                            storageRef = firebase.storage().ref(`${uid}/${values.pictures['pic2']}`)
                            storageRef.getDownloadURL()
                                .then((url)=>{
                                    // console.log(url)
                                    values.pictures['pic2'] = url
                                })
                                .catch((err)=>{
                                    console.log(err)
                                })
                            storageRef = firebase.storage().ref(`${uid}/${values.pictures['pic3']}`)
                            storageRef.getDownloadURL()
                                .then((url)=>{
                                    // console.log(url)
                                    values.pictures['pic3'] = url
                                })
                                .catch((err)=>{
                                    console.log(err)
                                })
                            meetingListCopy[values.userUid] = values
                            userArray.push(values)
                            // console.log(userArray)
                            this.setState({
                                meetingList : meetingListCopy,
                                userArray
                            })
                        }
                    }
                })
            })
        })
    })
    .then(()=>{
            console.log('pohnch gya',this.state.userArray)
            this.state.userArray && this.gettingData()
        })
      }

    gettingData(){
        this.setState({
            getData : true
        })
    }

    setLoader(){
        setTimeout(()=>{
            this.setState({
                loader : false
            })
            },2000)
    }

    setMeeting(){
        this.setState({
            meeting : true
        })
        // console.log(this.state)
    }

    action(e){
        console.log(e)
    }
  
    fixMeeting(user){
        console.log('user',user)
        swal("Do you want to fix meeting", {
            buttons: {
                cancel: "No",
                Yes: true,
            },
            })
          .then((val)=>{
              console.log('User',user)
              val && this.props.history.replace('/meeting',user)
          })
    }

    plusSlides(n) {
        const {slideIndex} = this.state
        n === 1 ? this.setState({
            slideIndex : slideIndex + 1,
        }) :
        n === -1 && slideIndex === 1 ? this.setState({
            slideIndex : 3
        }) :
        n === -1 && slideIndex !== 1 && this.setState({
            slideIndex : slideIndex - 1
        }) 

        slideIndex === 3 && n === 1 && this.setState({
            slideIndex : 1
        })
      }

    setData(){
        var {sendReq,userArray,recReq} = this.state
        // console.log('recReq',recReq)
        var dummyDataCopy = Object.assign({},this.state.dummyData)
        var recDataCopy = Object.assign({},this.state.recData)
        // console.log('userArray',userArray)
        userArray.map(v=>{
            recReq.map(rec=>{
                if(v.userUid === rec.userUid){
                    v['meetingList'] = rec['meetingList']
                    recDataCopy[v.userUid] = v
                }
                // console.log(v)
                // return console.log('rec',rec)
                return null
            })
            return sendReq.map(send=>{
                if(v.userUid === send.userUid){
                    // !dummyData[v.userUid] ? dummyData[v.userUid] = v && sendReqData.push(v) :
                    // console.log('send',send)
                    v['meetingList'] = send['meetingList']
                    dummyDataCopy[v.userUid] = v
                    // console.log('UserDummy',dummyDataCopy)
                    return dummyDataCopy
                }
                return null
            })
        })
        // console.log('dummyData',dummyDataCopy)
        this.setState({
            userDataSend: false,
            dummyData : dummyDataCopy,
            recData: recDataCopy,
            dummy: true
        })
    }
    dummyD(){
        var {dummyData,sendReqData,recData,recReq,userArray} = this.state
        // console.log('recData',recData)
        var arr = []
        var arr1 = []
        Object.entries(dummyData).forEach((key,val)=>{
            arr.push(key[1])
            // console.log('Hello')
        })
        Object.entries(recData).forEach((key,val)=>{
            arr1.push(key[1])
            // console.log(key)
        })
        recReq = [...new Set(arr1)];
        sendReqData = [...new Set(arr)];
        var allData = [...recReq,...sendReqData]
        console.log('allData',allData)
        // console.log('recReq',sendReqData)
        this.setState({
            sendData: true,
            sendReqData,
            recReq,
            dummy: false
        })

    }

    cancelReq(uid){
        var {userUid,dummyData,sendReqData} = this.state
        var arr = []
        console.log(uid)
        swal("Do you want to Cancel the Meeting", {
            buttons: {
                cancel: "No",
                Yes: true,
            },
            })
          .then((val)=>{
              console.log(val)
              val && firebase.database().ref('userList').child(`${userUid}/meetingList/send/${uid}`).remove()
              val && firebase.database().ref('userList').child(`${uid}/meetingList/recieve/${userUid}`).remove()
              return val
          })
          .then((val)=>{
              val && Object.entries(dummyData).forEach((key,value)=>{
                  console.log(key[1]['userUid'])
                  uid !== key[1]['userUid'] && arr.push(key[1])
              })
              if(val){
                sendReqData = [...new Set(arr)];
                this.setState({
                    sendReqData
                })
              }
          })
    }

    sendRec(e){
        this.setState({
            sendToRec: e
        })
    }
    acceptReq(v){
        const {userUid} = this.state
        firebase.database().ref('userList').child(`${userUid}/meetingList/recieve/${v['userUid']}`).once('value',value=>{
            var val = value.val()
            console.log(val)
        })
    }

    render(){
        var {slideIndex} = this.state
        const {meeting,userArray,loader,getData,userDataSend,sendData,sendReqData,userUid,dummy,sendToRec,recReq} = this.state
        userDataSend && setTimeout(()=>{this.setData()},1000)
        dummy && setTimeout(()=>{this.dummyD()},100)
        return(
            <div>
                {loader ? <center style={{ margin:'100px 100px' }}><div className="loader loader1"></div></center> :
                <div>
                    {!meeting ? <div>
                        {/* <h1>“You haven’t done any meeting yet!”</h1> */}
                        <button className="btn btn-primary btn1" onClick={()=>this.sendRec(false)}>Send Requests</button>
                        <button className="btn btn-primary btn1" onClick={()=>this.sendRec(true)}>Recieve Requests</button>
                        <center>
                            <div className="fixed">
                            <button className="btn btn-primary btn1" onClick={()=> this.setMeeting()}>
                            Set a meeting!
                            </button>
                            </div>
                            {/* <div className="fixed">
                            <FloatGroup style={{position : "absolute"}} margin={80} delay={0.02}>
                                <button className="btn9" onClick={()=> this.setMeeting()}><span className="fa fa-plus"></span></button>
                                <div></div>
                            </FloatGroup>
                            </div> */}
                            </center>
                    </div> : <center>
                        {getData && 
                        <Cards 
                    onEnd={()=>this.action('end')} 
                    size={[400,700]} 
                    cardSize = {[350,500]}
                    className='master-root'>
                        {userArray.map((user,i) =>
                            <Card
                            key={i}
                            onSwipeLeft={()=>this.action('swipe left')}
                            onSwipeRight={()=>this.fixMeeting(user)}
                            >
                            <div className="card-deck">
                                <div className="card">
                                <div className="w3-content w3-display-container">
                                    {slideIndex === 1 && <img className="mySlides" src={user.pictures['pic1']} style={{width:'100%',height:'350px'}} />}
                                    {slideIndex === 2 && <img className="mySlides" src={user.pictures['pic2']} style={{width:'100%',height:'350px'}} />}
                                    {slideIndex === 3 && <img className="mySlides" src={user.pictures['pic3']} style={{width:'100%',height:'350px'}} />}
                                    <button className="w3-button w3-black w3-display-left" onClick={()=>this.plusSlides(-1)}>&#10094;</button>
                                    <button className="w3-button w3-black w3-display-right" onClick={()=>this.plusSlides(1)}>&#10095;</button>
                                    </div>
                                    <div className="card-body">
                                    <h5 className="card-title">{user.nickName}</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    </div>
                                    <div className="card-footer">
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                    </div>
                                </div>
                                </div>
                            </Card>
                        )}
                        </Cards>}
                        </center>}
                                </div>}
                {!sendToRec && !meeting && sendData && sendReqData.map((v,i)=>{
                    // console.log(v['pictures']['pic1'])
                    return <div className="card" key={i}>
                    <img src={v['pictures']['pic1']} className="img2"></img>
                    <div style={{width:'100%'}}>
                        <div className="container1">
                        <h5 className='name'><b>{v['userName']}</b></h5>
                        <p>Name: {v['meetingList']['recieve'][userUid]['name']}</p> 
                        <p>Address: {v['meetingList']['recieve'][userUid]['address']}</p>
                        <p>{v['meetingList']['recieve'][userUid]['selectedDate']}</p>
                        </div>
                        <button className='btn btn-primary' style={{width:'100%',height : '50px'}} onClick={this.cancelReq.bind(this,v['userUid'])}>Cancel Request</button>
                    </div>
                   <hr/>
                </div>
                }) }
                {sendToRec && !meeting && sendData && recReq.map((v,i)=>{
                    return <div className="card" key={i}>
                    <img src={v['pictures']['pic1']} className="img2"></img>
                    <div style={{width:'100%'}}>
                        <div className="container1">
                        <h5 className='name'><b>{v['userName']}</b></h5>
                        <p>Name: {v['meetingList']['send'][userUid]['name']}</p> 
                        <p>Address: {v['meetingList']['send'][userUid]['address']}</p>
                        <p>{v['meetingList']['send'][userUid]['selectedDate']}</p>
                        </div>
                        <button className='btn btn-primary' style={{width:'100%',height : '50px',marginBottom:'5px'}} onClick={this.acceptReq.bind(this,v)}>Accept Request</button>
                        <button className='btn btn-primary' style={{width:'100%',height : '50px',backgroundColor:'red'}}>Delete Request</button>
                    </div>
                   <hr/>
                </div>
                }) }
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    // console.log('state',state)
    return {
      user: state.authReducer.user
    }
   }
  
   const mapDispatchToProps = (dispatch) => {
    return {
      updateUser: (user) => dispatch(updateUser(user))
    }
  }
   
   
   export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)