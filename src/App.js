import './App.css';
import { useState, useEffect } from "react";

function App() {
   
  const [countTD, setCountTD] = useState(1500)
  const [countStudyLength, setCountStudyLength] = useState(25)
  const [countBreakLength, setCountBreakLength] = useState(5)
  const [running, setRunning] = useState(false)
  const [sessionDisplay, setSessionDisplay] = useState("◀")
   
   const timeout = setTimeout(() => {
      if (countTD && running){
        setCountTD(countTD - 1)
      }
    }, 1000);        
 

  function buttonStartPause () {
        clearTimeout(timeout);
        setRunning(!running);
       }

      function clock() {
        if(running){
          console.log(running)
          timeout
          restartTimer();
          } else {
          clearTimeout(timeout)
          
        }
       }
  
       useEffect(() => {
        clock()
      }, [running, countTD, timeout])

  function timeFormatter (){
      const minutes = Math.floor(countTD / 60);
      const seconds = countTD - minutes * 60;
      const formattedSeconds = seconds < 10 ? '0' + seconds : seconds;
      const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
      return `${formattedMinutes}:${formattedSeconds}`;
    }


function restartTimer () {   
  
  if (!countTD && sessionDisplay === "◀"){
    setCountTD(countBreakLength * 60);
    setSessionDisplay("▶");
    playAlarm(); 
    };

    if (!countTD && sessionDisplay === "▶"){
    setCountTD(countStudyLength * 60);
    setSessionDisplay("◀");
    playAlarm();
    };
};

  function playAlarm(){
    let audio = document.getElementById("beep");
    audio.play();
  };

  function buttonReset() {
    clearTimeout(timeout);
    setRunning(false);
    setCountTD(1500);
    resetAlarm();
    setSessionDisplay("◀");
    setCountStudyLength(25);
    setCountBreakLength(5);
    };
  
    function resetAlarm(){
      const audio = document.getElementById("beep");
      audio.pause();
      audio.currentTime = 0;
    }

  function studyIncrement(){
     if (countStudyLength < 60){
    setCountStudyLength(countStudyLength +1);
    setCountTD(countTD + 60);
    };  
  }
      
  function studyDecrement(){
      if (countStudyLength > 1){
    setCountStudyLength(countStudyLength -1);
    setCountTD(countTD - 60);
    };
  }

  function breakIncrement(){
    if (countBreakLength < 60){
      setCountBreakLength(countBreakLength +1)
    };
  }

  function breakDecrement(){
    if (countBreakLength > 1){
     setCountBreakLength(countBreakLength -1);
    };
  }

  const title = sessionDisplay === "◀" ? "◀" : "▶";

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