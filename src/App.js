import './App.css';
import { useState } from "react";
//import moment from 'moment';

let running = false;
let interval = null;
let secondsDisplay = "";
let minutesDisplay = "";

function App() {
   
  //const [running, setRunning] = useState(false)
  const [countTD, setCountTD] = useState("25:00")
  
  
    //const [timeRemaining, setTimeRemaining] = useState(25)
    //const [inStudy, setInStudy] = useState(false)
    //const [inBreak, setInBreak] = useState(false)
    //const [countSD, setCountSD] = useState(25)
    //const [countBD, setCountBD] = useState(5)
    //const [minutesDisplay, setMinutesDisplay] = useState("")
    //const [secondsDisplay, setSecondsDisplay] = useState("")
    //const [seconds, setSeconds] = useState(59);
    //const [minutes, setMinutes] = useState(25);
    
 
    let seconds = 0;
    let minutes = 25;
    //let countTD = "";
    
    
    
   // window.onload = function(){
     // what();
      //function what(){

    function buttonStartPause() {
      console.log(running);

        if (running){
            clearInterval(interval);
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
        if (minutes < 9){
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
        if (minutes < 9){
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
        if (minutes < 9){
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
      //document.getElementById("time-left").innerHTML = (countTD);
       
      //}
      
    function timerFinished(){
      console.log("timer has reached 00:00")
    };


    function buttonReset() {
        clearInterval(interval);
        console.log(interval);
        secondsDisplay = "00";
        minutesDisplay = "25";
        seconds = 0;
        minutes = 25;
        running = false;
        console.log(running)
        setCountTD((minutesDisplay)+":"+(secondsDisplay));
       };
  
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
        
        <div className = "timer">
          <div className = "timeDisplay" id="time-left">{countTD}</div>
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
            <div className = "inputDisplay" id="session-length">25</div>
            <div className = "adjustBtn" id="session-decrement">-</div>
            <div className = "adjustBtn" id="break-increment">+</div>
            <div className = "inputDisplay" id="break-length">5</div>
            <div className = "adjustBtn" id="break-decrement">-</div>
        </div>
      </div>
    </div>
 );

};
  
export default App;
