import './App.css';

function App() {
  return (
    <div className="App">
        <div className = "timer">
          <div className = "timeDisplay" id="timer-label">25:00</div>
          <div className = "startResetBtn"  id="start_stop">START<br></br>PAUSE</div>
          <div className = "startResetBtn" id="reset">RESET</div>

          <label className = "label" id="session-label">Study</label>
           
          <label  className = "label" id="break-label">Break</label>

<div className = "button-container">
          <div className = "adjustBtn" id="session-increment">+</div>

          <div className = "inputDisplay" id="session-length">25 mins</div>

          <div className = "adjustBtn" id="session-decrement">-</div>

          <div className = "adjustBtn" id="break-increment">+</div>

          <div className = "inputDisplay" id="break-length">5 mins</div>

          <div className = "adjustBtn" id="break-decrement">-</div>
        </div>
      </div>
    </div>
  );
}

export default App;
