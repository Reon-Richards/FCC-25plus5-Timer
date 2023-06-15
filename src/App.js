import './App.css';
import { useState } from "react";
//import moment from 'moment';

let running = false;
let interval = null;
let secondsDisplay = "";
let minutesDisplay = "";
let dotColor = {};
let breaktime = false;

function App() {
   

  const [countTD, setCountTD] = useState("25:00")
  const [countStudyLength, setCountStudyLength] = useState(25)
  const [countBreakLength, setCountBreakLength] = useState(5)
  
    //const [running, setRunning] = useState(false)
    //const [timeRemaining, setTimeRemaining] = useState(25)
    //const [inStudy, setInStudy] = useState(false)
    //const [inBreak, setInBreak] = useState(false)


    //const [minutesDisplay, setMinutesDisplay] = useState("")
    //const [secondsDisplay, setSecondsDisplay] = useState("")
    //const [seconds, setSeconds] = useState(59);
    //const [minutes, setMinutes] = useState(25);
       
    let minutes = countStudyLength;
    let seconds = 0;
    
    function buttonStartPause() {
        if (running){
            clearInterval(interval);
            dotColor = {color : 'orange'}
            //interval = null;
            console.log(interval);
            console.log(running);
            running = false;
            seconds = Number(secondsDisplay);
            console.log(secondsDisplay);
            console.log(seconds);
            minutes = Number(minutesDisplay);
            console.log(minutes);
        }
        else {
          interval = setInterval(startTimer, 1000);
          console.log(interval);
          console.log(running)
        };
    };

    function startTimer () {
      running = true;
      dotColor = {color : 'aqua'}
      console.log(running)
      seconds -- ;
      if (minutes === 0 && seconds === 0){
        clearInterval(interval);
        timerFinished()};
    
      if (seconds < 0){
        minutes -- ;
        seconds = 59;
        secondsDisplay = seconds;
        if (minutes >= 10){
          minutesDisplay = minutes;
        }
        if (minutes <= 9){
          minutesDisplay = "0" + minutes;
        }
        if (minutes < 1){
          minutesDisplay = "00"}
      };

        if(seconds <= 9){
        secondsDisplay = "0" + seconds;
        if (minutes >= 10){
          minutesDisplay = minutes;
        }
        if (minutes <= 9){
          minutesDisplay = "0" + minutes;
        }
        if (minutes < 1){
          minutesDisplay = "00"}
      };
      
      if (seconds > 9){
        secondsDisplay = seconds;
        if (minutes >= 10){
          minutesDisplay = minutes;
        }
        if (minutes <= 9){
          minutesDisplay = "0" + minutes;
        }
        if (minutes < 1){
          minutesDisplay = "00"}
      };
    console.log(minutes);
    console.log(minutesDisplay);
    console.log(seconds);
    console.log(secondsDisplay);
    
    setCountTD((minutesDisplay)+":"+(secondsDisplay));
    console.log((minutesDisplay)+":"+(secondsDisplay));
    console.log(`${countTD}`);
    

      };
     
      console.log(countTD);
     
    function timerFinished(){
      if (breaktime = true){
        alert ("all over rover!")
      }else if (breaktime = false){
      breaktime = true;
      console.log("study timer has reached 00:00");
      dotColor = {color : 'yellow'};
      minutes = countBreakLength;
      console.log(countBreakLength);
      interval = setInterval(startTimer, 1000);
      console.log(interval);
      console.log(running);
      };
    };


    function buttonReset() {
        clearInterval(interval);
        console.log(interval);
        secondsDisplay = "00";
        minutesDisplay = "25";
        seconds = 0;
        minutes = 25;
        running = false;
        dotColor = {color : 'orange'}
        console.log(running)
        setCountTD((minutesDisplay)+":"+(secondsDisplay));
        setCountStudyLength(25);
        setCountBreakLength(5);
       };
  
       function studyIncrement(){
        if (countStudyLength === 60){
          return;
        }
        setCountStudyLength(countStudyLength +1);
        //minutes = countStudyLength;
      };  
      
      function studyDecrement(){
        if (countStudyLength === 1){
          return;
        }
        setCountStudyLength(countStudyLength -1);
        //minutes = countStudyLength;
      };

      function breakIncrement(){
        if (countBreakLength === 60){
          return;
        }
        setCountBreakLength(countBreakLength +1)
        //minutes = countBreakLength;
      };

      function breakDecrement(){
        if (countBreakLength === 1){
          return;
        }
        setCountBreakLength(countBreakLength -1);
        //minutes = countBreakLength;
      };

  return (
    <div className="App">
        <div className = "timer">
         <div className = "timeDisplay" id="time-left">{countTD}</div>
          <div className = "startResetBtn"  id="start_stop"  onClick={() => buttonStartPause()}>START<br></br>PAUSE</div>
          <div className = "startResetBtn" id="reset" onClick={() => buttonReset()}>RESET</div>
          <hr id="hr1" ></hr>
          <hr id="hr2"></hr>
          <div className = "label-container">
            <label className = "label" id="session-label">STUDY</label>
            <span id = "timer-label" style={dotColor}> . . . </span>
            <label className = "label" id="break-label">BREAK</label>
          </div>
          <div className = "button-container">
            <div className = "adjustBtn" id="session-increment"  onClick={() => studyIncrement()}>+</div>
            <div className = "inputDisplay" id="session-length">{countStudyLength}</div>
            <div className = "adjustBtn" id="session-decrement" onClick={() => studyDecrement()}>-</div>
            <div className = "adjustBtn" id="break-increment"  onClick={() => breakIncrement()}>+</div>
            <div className = "inputDisplay" id="break-length">{countBreakLength}</div>
            <div className = "adjustBtn" id="break-decrement"  onClick={() => breakDecrement()}>-</div>
        </div>
      </div>
    </div>
 );

};
  
export default App;
