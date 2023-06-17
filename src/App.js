import './App.css';
import { useState } from "react";

let running = false;
let interval = null;
let breaktime = false;
let minutes = 0;
let seconds = 0;
let displayMinutes = "25"
let displaySeconds = "00"
let sessionDisplay = "◀";
let firstStart = true;

function App() {
   
  const [countTD, setCountTD] = useState("25:00")
  const [countStudyLength, setCountStudyLength] = useState(25)
  const [countBreakLength, setCountBreakLength] = useState(5)
   
  function buttonStartPause() {
        console.log(firstStart);
    if ((running === false) && (breaktime === false) && (firstStart === true)){
        minutes = countStudyLength;};
    if ((running === false) && (breaktime === true) && (firstStart === true)){
        minutes = countBreakLength;
        };
    if (running){
        clearInterval(interval);
        console.log(interval);
        console.log(running);
        running = false;
        console.log(seconds);
        minutes = minutes;
        console.log(minutes);
        }

    else {
        interval = setInterval(startTimer, 1000);
        console.log(interval);
        console.log(running);
        console.log(breaktime);
        console.log(firstStart);
        console.log(minutes);
        console.log(seconds);
        };
    };

  function startTimer () {
    setCountTD ((minutes)+":"+(seconds));
    console.log((displayMinutes)+":"+(displaySeconds));
    console.log((minutes)+":"+(seconds));
    console.log(countTD);
    console.log(breaktime);
    running = true;
    firstStart = false;
    console.log(running);
    seconds -- ;
    console.log(minutes);
    console.log(seconds);
    
    if ((minutes === 0 && seconds < 0 && breaktime === false)){
      //displayMinutes = "00";
      //displaySeconds = "00";
      clearInterval(interval);
      console.log(typeof minutes);
      let newMinutes = document.getElementById("break-length").innerHTML;
      console.log(typeof newMinutes);
      console.log(newMinutes);
      minutes = parseInt(newMinutes);
      console.log(minutes);
      console.log(countBreakLength);
      studyTimerFinished();
      };   

    if ((minutes === 0 && seconds < 0 && breaktime === true)){
      //displayMinutes = "00";
      //displaySeconds = "00";
      clearInterval(interval);
      let newMinutes = document.getElementById("session-length").innerHTML;
      console.log(typeof newMinutes);
      console.log(newMinutes);
      minutes = parseInt(newMinutes);
      console.log(typeof minutes);
      console.log(minutes);
      console.log(countStudyLength);
      breakTimerFinished();
      };
      
    if (seconds < 0){
      displaySeconds = "00";
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
    console.log((displayMinutes)+":"+(displaySeconds));
    console.log((minutes)+":"+(seconds));
    console.log(countTD);
    };

  function studyTimerFinished(){
    breaktime = true;
    console.log("study timer has reached 00:00");
    playAlarm();
    console.log(minutes);
    console.log(countBreakLength);
    seconds ++;
    interval = setInterval(startTimer, 1000);
    sessionDisplay = "▶";
    console.log(interval);
    console.log(running);
    console.log(breaktime);
    };

  function breakTimerFinished(){
    breaktime = false;
    console.log("break timer has finished")
    playAlarm();
    console.log(minutes);
    console.log(countStudyLength);
    seconds ++;
    interval = setInterval(startTimer, 1000);
    sessionDisplay = "◀";
    console.log(interval);
    console.log(running);
    console.log(breaktime);
    };

  function playAlarm(){
    let audio = document.getElementById("beep");
    audio.play();
    console.log(audio)
  };

  function resetAlarm(){
    let audio = document.getElementById("beep");
    audio.pause();
    audio.currentTime = 0;
  }

  function buttonReset() {
    clearInterval(interval);
    console.log(interval);
    resetAlarm();
    seconds = 0;
    minutes = 25;
    running = false;
    firstStart = true;
    sessionDisplay = "◀";
    console.log(running)
    setCountTD("25:00");
    setCountStudyLength(25);
    setCountBreakLength(5);
    console.log(countTD);
    console.log(countStudyLength);
    console.log(countBreakLength);
    };
  
  function studyIncrement(){
       if (countStudyLength > 59){
      return;
    }
    setCountStudyLength(countStudyLength +1);
    console.log(countStudyLength);
    console.log(minutes)
    };  
      
  function studyDecrement(){
      if (countStudyLength === 1){
      return;
    }
    setCountStudyLength(countStudyLength -1);
    console.log(countStudyLength);
    console.log(minutes)
    };
  function breakIncrement(){
    if (countBreakLength > 59){
      return;
    }
    setCountBreakLength(countBreakLength +1)
    console.log(countBreakLength)
    console.log(minutes)
    };

  function breakDecrement(){
    if (countBreakLength === 1){
      return;
    }
    setCountBreakLength(countBreakLength -1);
    console.log(countBreakLength)
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
            <div id = "timer-label">{sessionDisplay}</div>
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
      <audio id="beep" src="https://assets.mixkit.co/active_storage/sfx/2576/2576-preview.mp3" ></audio>
     </div>
    );

};
  
export default App;