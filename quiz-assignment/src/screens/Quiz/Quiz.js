import React, { Component } from 'react';
import './Quiz.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import swal from 'sweetalert'

class Quiz extends Component {
  constructor(){
    super();
    this.state = {
      time : false,
      minute : 4,
      sec : 59,
      result : false,
      keyTrue : false,
      secretKey : 'mans',
      keyCheck : '',
      buttonDisable : true,
      correct : 0,
      clicked : '',
      quiz : ['AngularJS','Vuejs','React','HTML5','CSS3','JavaScript'],
      count : 0,
      quizQuestions : '',
      quizPage : true,
      quizStart : false,
      tests : '',
      quizzez : {
        AngularJS : {
          Quiz1 : [{
            question : ' Which of the following is not a core AngularJS directive',
            A : 'ng-app',
            B : 'ng-model',            
            C : 'ng-bind',
            D : 'ng-state',
            answer : 'D'
          },
          {
            question : ' Which of the following is true about uppercase filter?',
            A : 'Uppercase filter is a function which takes text as input.',
            B : 'Uppercase filter converts a text to upper case text.',
            C : 'Both of the above.',
            D : 'None of the above.',
            answer : 'B'
          },
          {
            question : 'angular.module is primarily used to create application module.',
            A : 'true',
            B : 'false',
            answer : 'A'
          },
          {
            question : 'Use novalidate with a form declaration to disable any browser specific validation.',
            A : 'true',
            B : 'false',
            answer : 'A'
          },
          {
            question : 'Which of the following is true about provider?',
            A : 'provider is used by AngularJS internally to create services, factory etc.',
            B : 'provider is used during config phase.',
            C : 'provider is a special factory method.',
            D : 'All of the above.',
            answer : 'D'
          }],
          Quiz2 : [{
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          },
          {
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          },
          {
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          },
          {
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          },
          {
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          }],
          Quiz3 : [{
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          },
          {
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          },
          {
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          },
          {
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          },
          {
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          }]
        },
        Vuejs : {
          Quiz1 : [{
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          },
          {
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          },
          {
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          },
          {
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          },
          {
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          }],
          Quiz2 : [{
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          },
          {
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          },
          {
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          },
          {
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          },
          {
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          }],
          Quiz3 : [{
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          },
          {
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          },
          {
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          },
          {
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          },
          {
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          }]
        },
        React : {
          Quiz1 : [{
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          },
          {
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          },
          {
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          },
          {
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          },
          {
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          }],
          Quiz2 : [{
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          },
          {
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          },
          {
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          },
          {
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          },
          {
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          }],
          Quiz3 : [{
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          },
          {
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          },
          {
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          },
          {
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          },
          {
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          }]
        },
        HTML5 : {
          Quiz1 : [{
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          },
          {
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          },
          {
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          },
          {
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          },
          {
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          }],
          Quiz2 : [{
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          },
          {
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          },
          {
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          },
          {
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          },
          {
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          }],
          Quiz3 : [{
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          },
          {
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          },
          {
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          },
          {
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          },
          {
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          }]
        },
        CSS3 : {
          Quiz1 : [{
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          },
          {
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          },
          {
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          },
          {
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          },
          {
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          }],
          Quiz2 : [{
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          },
          {
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          },
          {
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          },
          {
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          },
          {
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          }],
          Quiz3 : [{
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          },
          {
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          },
          {
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          },
          {
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          },
          {
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          }]
        },
        JavaScript : {
          Quiz1 : [{
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          },
          {
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          },
          {
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          },
          {
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          },
          {
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          }],
          Quiz2 : [{
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          },
          {
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          },
          {
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          },
          {
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          },
          {
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          }],
          Quiz3 : [{
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          },
          {
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          },
          {
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          },
          {
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          },
          {
            question : '',
            option1 : '',
            option2 : '',
            option3 : '',
            option4 : '',
            answer : ''
          }]
        }
      },
      userName : localStorage.getItem('name')
    }
    this.quiztaker = this.quiztaker.bind(this);
    this.instruction = this.instruction.bind(this);
    this.startQuiz = this.startQuiz.bind(this);
    this.questionData = this.questionData.bind(this);
    this.nextQuestion = this.nextQuestion.bind(this);
    this.clickChecker = this.clickChecker.bind(this);
    this.securityCheck = this.securityCheck.bind(this);
    this.keyCheck = this.keyCheck.bind(this);
  }
  dabao(i){
    const {quizzez,tests} = this.state
    console.log(quizzez[i])
    this.setState({
      quizPage : false,
      tests : i
    })
    console.log(tests)
  }

  quiztaker(){
    const {quizzez,tests} = this.state;
    return <div>
      <h1>{tests} Quiz</h1>
      <ol>
        <li><button className='button1' onClick={this.quizData.bind(this,quizzez[tests].Quiz1)}>1. Quiz 1</button></li>
        <li><button className='button1' onClick={this.quizData.bind(this,quizzez[tests].Quiz1)}>2. Quiz 2</button></li>
        <li><button className='button1' onClick={this.quizData.bind(this,quizzez[tests].Quiz1)}>3. Quiz 3</button></li>
      </ol>
    </div>
  }
  quizData(arr){
    console.log('Array',arr);
    this.setState({
      quizQuestions : arr,
      quizStart : true
    })
  }

  instruction(){
    const {tests} = this.state;
    return <div>
      <h1>{tests} Quiz Detail</h1>
      <h3>There are five questions in {tests} Quiz and you have five minutes to answer these questions</h3>
      <button className='button1' onClick={this.startQuiz}>Start Quiz</button>
    </div>
  }
  
  startQuiz(){
    console.log('Hello')
    this.setState({
      quizPage : true,
      quizStart : true
    })
  }
  // timer(){
  //   var min = 4;
  //   var sec = 59;
  //   setInterval(()=>{
  //     if(sec===0){
  //       min--;
  //     }
  //     else{
  //       sec--;
  //     }
  //     return <div>{sec}</div>
  //   },1000)
  // }

  questionData(){
    const {quizQuestions,count,buttonDisable} = this.state;
    console.log(quizQuestions);
    return <div>
      <div>
        <h1>{count+1}. {quizQuestions[count].question}</h1>
      </div>
      <label className="container">{quizQuestions[count].A}
        <input type="radio" name="radio" value={quizQuestions[count].A} onClick={this.clickChecker}/>
        <span className="checkmark"></span>
      </label>
      <label className="container">{quizQuestions[count].B}
        <input type="radio" name="radio" value={quizQuestions[count].B} onClick={this.clickChecker}/>
        <span className="checkmark"></span>
      </label>
      {quizQuestions[count].C && <label className="container">{quizQuestions[count].C}
        <input type="radio" name="radio" value={quizQuestions[count].C} onClick={this.clickChecker}/>
        <span className="checkmark"></span>
      </label> }
      {quizQuestions[count].D && <label className="container">{quizQuestions[count].D}
        <input type="radio" name="radio" value={quizQuestions[count].D} onClick={this.clickChecker}/>
        <span className="checkmark"></span>
      </label> }      
      <button className='button1' disabled={buttonDisable} onClick={this.nextQuestion}>Next</button>
    </div>
  }

  clickChecker(val){
    console.log(val.target)
    this.setState({
      clicked : val.target.value,
      buttonDisable : false
    })
  }

  nextQuestion(){
    const {count,quizQuestions,clicked,correct} = this.state;
    const ans = quizQuestions[count].answer;
    console.log(quizQuestions[count])
    console.log(quizQuestions[count][ans])
    if(quizQuestions[count][ans] === clicked){
      this.setState({
        correct : correct+1
      })
    }
    if(count < quizQuestions.length - 1){
      this.setState({
        count : count + 1,
        buttonDisable : true
      })
    }
    else{
      this.setState({
        result : true
      })
    }
  }

  submitKey(){
    const {keyCheck} = this.state;
    return <div>
      <input type="password" value={keyCheck} onChange={this.keyCheck} />
      <button className="button2" onClick={this.securityCheck}>Submit</button>
    </div>
  }
  securityCheck(){
    const {keyCheck,secretKey} = this.state;
    if(keyCheck === secretKey){
      this.setState({
        keyTrue : true,
        time : true
      })      
    }
    else{
      swal("Key Error")
    }
  }

  keyCheck(val){
    console.log(val.target)
    this.setState({
      keyCheck : val.target.value
    })
  }

  resultPage(){
    const {correct,quizQuestions,tests} = this.state;
    const per = (correct/quizQuestions.length)*100
    console.log(correct)
    return <div>
      <h1>{tests}</h1>
      <h1>Your score is {per}%</h1>
    </div>
  }

  render() {
    const {quiz,userName,quizPage,quizStart,keyTrue,result} = this.state;
    // console.log(quiz)
    return (
      <div>
        {quizPage && !quizStart && <div>
      <h1 className="quiz1"><b><i><u>{userName}</u></i></b></h1>
        {quiz.map((v,i)=>{
          return <div key={i}><h3>{i+1}. {v}</h3> <button className='button1 button-right' onClick={()=> this.dabao(v)}>Take Quiz</button></div>
        })}
      </div>}
      {!quizPage && !quizStart && !keyTrue && !result && this.quiztaker()}
      {!quizPage && quizStart && !keyTrue && !result && this.instruction()}
      {quizPage && quizStart && !keyTrue && !result && this.submitKey()}
      {/* {time && this.timer()} */}
      {quizPage && quizStart && keyTrue && !result && this.questionData()}
      {result && this.resultPage()}
      </div>
    );
  }
}

export default Quiz;
