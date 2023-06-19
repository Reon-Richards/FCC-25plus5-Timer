import './App.css';
import { useState, useEffect } from "react";

//let running = false;
//let interval = null;
let breaktime = false;
let minutes = 0;
//let seconds = 0;
//let displayMinutes = "25"
//let displaySeconds = "00"
let sessionDisplay = "◀";
//let firstStart = true;

function App() {
   
  const [countTD, setCountTD] = useState(1500)
  const [countStudyLength, setCountStudyLength] = useState(25)
  const [countBreakLength, setCountBreakLength] = useState(5)
  const [running, setRunning] = useState(false);
   
  /*function buttonStartPause() {
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
    };*/

  /*function startTimer () {
    //setCountTD ((minutes)+":"+(seconds));
    console.log((displayMinutes)+":"+(displaySeconds));
    console.log((minutes)+":"+(seconds));
    console.log(countTD);
    console.log(breaktime);
    running = true;
    firstStart = false;
    console.log(running);
    //seconds -- ;
    console.log(minutes);
    console.log(seconds);
    
    if ((minutes === 0 && seconds < 0 && breaktime === false)){
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
    };*/

  function buttonStartPause () {
        clearTimeout(timeout);
        setRunning(!running);
      }

  const timeout = setTimeout(() => {
        if(countTD && running){
          setCountTD(countTD - 1)
        }
      }, 1000);

      const clock = () => {
        if(running){
        restartTimer();
        return timeout
        
        } else {
        return  clearTimeout(timeout);
        }
       }
    
 useEffect(() => {
  clock();
     }, [running, countTD, timeout]);

  function timeFormatter (){
      const minutes = Math.floor(countTD / 60);
      const seconds = countTD - minutes * 60;
      const formattedSeconds = seconds < 10 ? '0' + seconds : seconds;
      const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
      return `${formattedMinutes}:${formattedSeconds}`;
    }


function restartTimer () {    
  if (breaktime === false){
    breaktime = true;
    setCountTD(countBreakLength * 60);
    playAlarm();
    sessionDisplay = "▶";
    console.log("study timer has reached 00:00");
    console.log(minutes);
    console.log(countBreakLength);
    //console.log(interval);
    console.log(running);
    console.log(breaktime);
    };

  if (breaktime === true){
    breaktime = false;
    setCountTD(countStudyLength * 60);
    playAlarm();
    sessionDisplay = "◀";
    console.log("break timer has finished")
    console.log(minutes);
    console.log(countStudyLength);
    console.log(interval);
    console.log(running);
    console.log(breaktime);
    };
};

  function playAlarm(){
    let audio = document.getElementById("beep");
    audio.play();
    console.log(audio)
  };

  function buttonReset() {
    clearTimeout(timeout);
    console.log(timeout);
    setRunning(false);
    setCountTD(1500);
    resetAlarm();
    //firstStart = true;
    sessionDisplay = "◀";
    console.log(running)
    setCountStudyLength(25);
    setCountBreakLength(5);
    console.log(countTD);
    console.log(countStudyLength);
    console.log(countBreakLength);
    };
  
    function resetAlarm(){
      const audio = document.getElementById("beep");
      audio.pause();
      audio.currentTime = 0;
    }

  function studyIncrement(){
       if (countStudyLength > 60){
      return;
    }
    setCountStudyLength(countStudyLength +1);
    setCountTD(countTD + 60);
    console.log(countStudyLength);
    console.log(countTD);
    console.log(minutes);
    };  
      
  function studyDecrement(){
      if (countStudyLength === 1){
      return;
    }
    setCountStudyLength(countStudyLength -1);
    console.log(countStudyLength);
    console.log(countTD);
    console.log(minutes);
    };

  function breakIncrement(){
    if (countBreakLength > 60){
      return;
    }
    setCountBreakLength(countBreakLength +1)
    console.log(countBreakLength);
    console.log(minutes);
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
          <div className = "timeDisplay" id="time-left">{timeFormatter()}</div>
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