import './App.css';
import { useState, useEffect } from "react";
import moment from 'moment';

function App() {

  const [running, setRunning] = useState(false)
  const [timeRemaining, setTimeRemaining] = useState(25)
  const [inStudy, setInStudy] = useState(false)
  const [inBreak, setInBreak] = useState(false)
  const [countTD, setCountTD] = useState(25)
  const [countSD, setCountSD] = useState(25)
  const [countBD, setCountBD] = useState(5)


  let displayTime = moment([8,30]).format('mm:ss');
  
  /*window.onload = function () {
    let seconds = "00";
    let minutes = "00";
    let appendMinutes = "25";
    let appendSeconds = "0";
    let buttonStart = document.getElementById('button-start');
    let buttonStop = document.getElementById('button-stop');
    let buttonReset = document.getElementById('button-reset');
    let Interval ;
    
    console.log(displayTime);
    console.log(appendMinutes);
    console.log(appendSeconds);

    buttonStart.onclick = function() {
       clearInterval(Interval);
       Interval = setInterval(startTimer, 1000);
    }
    
      buttonStop.onclick = function() {
         clearInterval(Interval);
    }
   
    buttonReset.onclick = function() {
       clearInterval(Interval);
      minutes = "00";
      seconds = "00";
      appendMinutes.innerHTML = minutes;
      appendSeconds.innerHTML = seconds;
    }
     
    function startTimer () {
      buttonStop.style.display = "inline-block";
      seconds++;
      
      if(seconds <= 9){
        appendSeconds.innerHTML = "0" + seconds;
      }
      
      if (seconds > 9){
        appendSeconds.innerHTML = seconds;
      }
    
      if (seconds > 59) {
        console.log("minutes");
        minutes++;
        appendMinutes.innerHTML = "0" + minutes;
        seconds = 0;
        appendSeconds.innerHTML = "0" + 0;
      }
      if (minutes > 9){
        appendMinutes.innerHTML = minutes;
      }
    }
}*/

  function clickReset(){
    setRunning(false);
    setInStudy(true);
    setInBreak(false);
    setCountTD(25);
    setCountSD(25);
    setCountBD(5);
   console.log(running, inStudy, inBreak, countTD, countSD, countBD)

  }

  
  /*const Stopwatch = () => {
    const [time, setTime] = useState(0);
    useEffect(() => {
      const interval = setInterval(() => {
    setTime((t) => {
    console.log(t); 
    return t + 1 ;
    });
    }, 1000);
    return () => clearInterval(interval);
    }, []);
    return  <div>Time: {time}</div>;
  } *** stopwatch by Jack Herrington */

  return (
    <div className="App">
      {/*<Stopwatch />*/}
        

        <button id="button-start">Start</button>
        <button id="button-stop">Pause</button>
        <button id="button-reset">Reset</button>
  

        <div className = "timer">
          <div className = "timeDisplay" id="time-left">25:00
            <span id="displayTime"></span>
          </div>
          <div className = "startResetBtn"  id="start_stop" >START<br></br>PAUSE</div>
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
