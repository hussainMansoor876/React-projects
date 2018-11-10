import React, { Component } from 'react';
import FbImageLibrary from 'react-fb-image-grid';
// import NavbarUI from "./Components/NavbarUI/Navbar";
import FacebookEmoji from 'react-facebook-emoji';
import Post from "./Components/Post/Post";
import './Components/Post/Post.css'
import moment from "moment";
import Moment from 'react-moment';
// import { Button, Typography, Grid } from "@material-ui/core";
import './App.css';
import first from './hd/0.jpg'
import second from './hd/1.jpg'
import third from './hd/2.jpg'
import fourth from './hd/3.jpg'
import fifth from './hd/4.jpg'
import sixth from './hd/5.jpg'
import seventh from './hd/6.jpg'
import like from './images/like-btn.PNG'
import comments from './images/comment-btn.PNG'
import share from './images/share-btn.PNG'


class App extends Component {
  constructor(){
    super();
    this.state = {
      emojiesShown : false,
        emoji: null,
        liked: false,
        loved: false,
        hahaed: false,
        wowed: false,
        saded: false,
        angred: false,
        man : false,
      post_obj: {
        createdBy: "Mansoor Husasin",
        avatar : 'https://avatars3.githubusercontent.com/u/35415573?s=400&u=e4522ec0b3e7566b61f78362871d2af454605c37&v=4',
        description:
          'Check this out new OPPO F9 Pro, 6.3" 16MP Camera, 6GB RAM and 3500 mAh',
        images: [first,second,third,fourth,fifth,sixth,seventh],
        createdAt: Date.now(),
        likes: ['Mansoor','Hussain','Fahad','Sufiyan'],
        buttons : [like,comments,share],
    }
    }
    this.showEmojies = this.showEmojies.bind(this)
    this.setEmojiImg = this.setEmojiImg.bind(this)
  }

  showEmojies(bool){
    this.setState({
      emojiesShown : bool
    })
  }

  setEmoji(newEmoji){
    const { emoji } = this.state;
    this.setState({
      man : "Hello"
    })
    console.log(this.state)

    // if (emoji && emoji !== 'like') {
    //   this.setState({ emoji: null }, this.setEmojiImg(null));
    //   return;
    // }

    // if (!emoji || emoji !== newEmoji)
    //   this.setState({ emoji: newEmoji }, this.setEmojiImg(newEmoji));

    // if (emoji === newEmoji)
    //   this.setState({ emoji: null }, this.setEmojiImg(null));

    // this.showEmojies(false);
  };

  setEmojiImg(emojiData){
    const { liked, loved, hahaed, wowed, saded, angred } = this.state;
    const {post_obj} = this.state;
    this.setState({
      man : "Hello"
    })
    console.log(emojiData)
    console.log(this.state)
  }
  mansoor(){
    this.setState({
      man : "Hello"
    })
    console.log(this.state)
  }

  render() {
    const {post_obj,emojiesShown} = this.state;
    return (
      <div className="card">
      {/* <FacebookEmoji type="love"/> */}
        {/* <NavbarUI/> */}
        <img src={post_obj.avatar} className='profile'></img>
        <p onClick={()=> this.mansoor()}>{post_obj.createdBy}</p>
        {/* <br/> */}
        <p className="p1">{moment(Date.now()).fromNow()}</p>
        <div  className="container">
        {/* <FbImageLibrary images={post_obj.images} width={50}/> */}
        <Post images={post_obj.images} width={50}/>
        </div>
        {/* <Button variant="contained" color="primary">
        Hello World
      </Button> */}
      <div className="btns">
      <div
            className="likeBtn"
            onMouseEnter={() => this.showEmojies(true)}
            onMouseLeave={() => this.showEmojies(false)}
          >
          {emojiesShown && (
              <div className="emojies">
                <div className="emoji" onClick={() => this.setEmoji('like')}>
                  <FacebookEmoji type="like" size="sm" />
                </div>
                <div className="emoji" onClick={() => this.setEmoji('love')}>
                  <FacebookEmoji type="love" size="sm" />
                </div>
                <div className="emoji" onClick={() => this.setEmoji('haha')}>
                  <FacebookEmoji type="haha" size="sm" />
                </div>
                <div className="emoji" onClick={() => this.setEmoji('wow')}>
                  <FacebookEmoji type="wow" size="sm" />
                </div>
                <div className="emoji" onClick={() => this.setEmoji('sad')}>
                  <FacebookEmoji type="sad" size="sm" />
                </div>
                <div className="emoji" onClick={() => this.setEmoji('angry')}>
                  <FacebookEmoji type="angry" size="sm" />
                </div>
              </div>
            )}
            <img
              onClick={() => this.setEmoji('like', true)}
              src={like}
              alt="Like"
            />
          </div>
          <div className="commentBtn">
            <img src={comments} alt="Comment" />
          </div>
          <div className="shareBtn">
            <img src={share} alt="Share" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
