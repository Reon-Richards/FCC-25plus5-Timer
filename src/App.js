import './App.css';
import { useState, useEffect } from "react";
import moment from 'moment';

function App() {

    const [running, setRunning] = useState(false)
    const [timeRemaining, setTimeRemaining] = useState(25)
    const [inStudy, setInStudy] = useState(false)
    const [inBreak, setInBreak] = useState(false)
    //const [countTD, setCountTD] = useState("25:00")
    const [countSD, setCountSD] = useState(25)
    const [countBD, setCountBD] = useState(5)
    //const [minutesDisplay, setMinutesDisplay] = useState("")
    //const [secondsDisplay, setSecondsDisplay] = useState("")
    //const [seconds, setSeconds] = useState(59);
    //const [minutes, setMinutes] = useState(25);
    
   
    let secondsDisplay = "26";
    let minutesDisplay = "00";
    let seconds = 27;
    let minutes = 0;
    let countTD = "25:00";

    let Interval ;
    
    function buttonStartPause() {
     /* if (running === true){
        clearInterval(Interval);
        setRunning(false);
        setTimeRemaining(countTD);
        stopTimer;
        function stopTimer () {
         setCountTD
        }
      else 
        setRunning(true);
        //setTimeRemaining(countTD);*/
        clearInterval(Interval);
        Interval = setInterval(startTimer, 1000);
     
      
      function startTimer () {
         seconds++;
 
         if(seconds <= 9){
          secondsDisplay = "0" + seconds;
        }
        
        if (seconds > 9){
          secondsDisplay = seconds;
        }
      
        if (seconds > 59) {
          minutes ++;
          minutesDisplay = "0" + minutes;
          seconds = 0;
          secondsDisplay = "0" + 0;
        }
        if (minutes > 9){
          minutesDisplay = minutes;
        }
        console.log(document.getElementById("time-left").innerHTML);
      let countTD = (minutesDisplay)+":"+(secondsDisplay);
      document.getElementById("time-left").innerHTML = countTD;
      
        console.log(minutes);
        console.log(minutesDisplay);
        console.log(seconds);
        console.log(secondsDisplay);
        console.log (countTD);
       
    }
  }

    function buttonReset() {
       clearInterval(Interval);
       secondsDisplay = "25";
       minutesDisplay = "00";
       seconds = 25;
       minutes = 0;
        setRunning(false);
        setInStudy(true);
        setInBreak(false);
        //setCountTD(25);
        //setCountSD(25);
        //setCountBD(5);
        
        let countTD = (minutesDisplay)+":"+(secondsDisplay);
        

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
          <div className = "timeDisplay" id="time-left">25:00</div>
          <div className = "startResetBtn"  id="start_stop"  onClick={() => buttonStartPause()}>START<br></br>PAUSE</div>
          <div className = "startResetBtn" id="reset" onClick={() => buttonReset()}>RESET</div>
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
