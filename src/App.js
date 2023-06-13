import './App.css';
import { useState, useEffect } from "react";

function App() {

  const [running, setRunning] = useState(false)
  const [timeRemaining, setTimeRemaining] = useState(25)
  const [inStudy, setInStudy] = useState(false)
  const [inBreak, setInBreak] = useState(false)
  const [countTD, setCountTD] = useState(25)
  const [countSD, setCountSD] = useState(25)
  const [countBD, setCountBD] = useState(5)



  function clickReset(){
    setRunning(false);
    setInStudy(true);
    setInBreak(false);
    setCountTD(25);
    setCountSD(25);
    setCountBD(5);
   console.log(running, inStudy, inBreak, countTD, countSD, countBD)

  }













  return (
    <div className="App">
        <input type="time" step='1' min="00:00:00" max="20:00:00"></input>
        <div className = "timer">
          <div className = "timeDisplay" id="timer-label">{countTD}</div>
          <div className = "startResetBtn"  id="start_stop">START<br></br>PAUSE</div>
          <div className = "startResetBtn" id="reset" onClick={() => clickReset()}>RESET</div>
          <hr id="hr1" ></hr>
          <hr id="hr2"></hr>
          <div className = "label-container">
            <label className = "label" id="session-label">STUDY</label>
            <label className = "label" id="break-label">BREAK</label>
          </div>
          <div className = "button-container">
            <div className = "adjustBtn" id="session-increment">+</div>
            <div className = "inputDisplay" id="session-length">{countSD}</div>
            <div className = "adjustBtn" id="session-decrement">-</div>
            <div className = "adjustBtn" id="break-increment">+</div>
            <div className = "inputDisplay" id="break-length">{countBD}</div>
            <div className = "adjustBtn" id="break-decrement">-</div>
        </div>
      </div>
    </div>
 );
}

export default App;
