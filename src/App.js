import './App.css';
import { useState } from "react";
//import moment from 'moment';

let running = false;
let interval = null;
let breaktime = false;
let minutes = 0;
let seconds = 0;
let displayMinutes = "25"
let displaySeconds = "00"
let sessionDisplay = "study";
let firstStart = true;
//let countTD = "25:00";

function App() {
   
  const [countTD, setCountTD] = useState("25:00")
  const [countStudyLength, setCountStudyLength] = useState(25)
  const [countBreakLength, setCountBreakLength] = useState(5)
   
    //const [running, setRunning] = useState(false)
    //const [timeRemaining, setTimeRemaining] = useState(25)
    //const [inStudy, setInStudy] = useState(false)
    //const [inBreak, setInBreak] = useState(false)
    //const [seconds, setSeconds] = useState(59);
    //const [minutes, setMinutes] = useState(25);
       
    function buttonStartPause() {
      console.log(firstStart)
      if ((running === false) && (breaktime === false) && (firstStart === true)){
        minutes = countStudyLength;};
      if ((running === false) && (breaktime === true) && (firstStart === true)){
        minutes = countBreakLength;
      };
        if (running){
            clearInterval(interval);
            //interval = null;
            console.log(interval);
            console.log(running);
            running = false;
            seconds = seconds;
            console.log(seconds);
            minutes = minutes;
            console.log(minutes);
      }
        else {
          interval = setInterval(startTimer, 1000);
          console.log(interval);
          console.log(running)
          
        };
    };

    function startTimer () {
      console.log(breaktime);
      running = true;
      firstStart = false;
      console.log(running);
      seconds -- ;
      console.log(minutes);
      console.log(seconds);
      
      if ((minutes === 0 && seconds === 0 && breaktime === false)){
        clearInterval(interval);
        studyTimerFinished();
      };   

      if ((minutes === 0 && seconds === 0 && breaktime === true)){
        clearInterval(interval);
        breakTimerFinished();
      };

      if (seconds < 0){
        minutes -- ;
        seconds = 59;
      };

      if (minutes >= 10){
        displayMinutes = minutes;
      };

      if (minutes < 1){
        displayMinutes = "00"
      };

      if (minutes <= 9){
        displayMinutes = "0" + minutes;
      };

      if (minutes < 1){
        displayMinutes = "00"
      };

      if (seconds > 9){
        displaySeconds = seconds;
      };

      if(seconds <= 9){
        displaySeconds = "0" + seconds;
        };
   
    console.log(minutes);
    console.log(seconds);
    
    setCountTD ((displayMinutes)+":"+(displaySeconds));
    console.log((minutes)+":"+(seconds));
    console.log(countTD);
    
    };

    function studyTimerFinished(){
      breaktime = true;
      sessionDisplay = "break";
      console.log("study timer has reached 00:00");
      minutes = countBreakLength;
      console.log(countBreakLength);
      interval = setInterval(startTimer, 1000);
      console.log(interval);
      console.log(running);
      };

    function breakTimerFinished(){
      breaktime = false;
      sessionDisplay = "study";
      console.log("break timer has finished")
      minutes = countStudyLength;
      console.log(countStudyLength);
      interval = setInterval(startTimer, 1000);
      console.log(interval);
      console.log(running);

    };

    function buttonReset() {
        clearInterval(interval);
        console.log(interval);
        seconds = 0;
        minutes = 25;
        running = false;
        firstStart = true;
        sessionDisplay = "study";
        console.log(running)
        setCountTD("25:00");
        setCountStudyLength(25);
        setCountBreakLength(5);
        console.log(countTD);
        console.log(countStudyLength);
        console.log(countBreakLength);
       };
  
       function studyIncrement(){
        if (firstStart === false){
          return;
        }
        if (countStudyLength === 60){
          return;
        }
        setCountStudyLength(countStudyLength +1);
        console.log(countStudyLength);
        minutes = countStudyLength;
        console.log(minutes)
      };  
      
      function studyDecrement(){
        if (firstStart === false){
          return;
        }

        if (countStudyLength === 1){
          return;
        }
        setCountStudyLength(countStudyLength -1);
        console.log(countStudyLength);
        minutes = countStudyLength;
        console.log(minutes)
      };

      function breakIncrement(){
        if (firstStart === false){
          return;
        }
        if (countBreakLength === 60){
          return;
        }
        setCountBreakLength(countBreakLength +1)
        console.log(countBreakLength)
        minutes = countBreakLength;
        console.log(minutes)
        };

      function breakDecrement(){
        if (firstStart === false){
          return;
        }

        if (countBreakLength === 1){
          return;
        }
        setCountBreakLength(countBreakLength -1);
        console.log(countBreakLength)
        minutes = countBreakLength;
        console.log(minutes)
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
            <span id = "timer-label">{sessionDisplay}</span>
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
