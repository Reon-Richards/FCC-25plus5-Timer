import './App.css';

function App() {
  return (
    <div className="App">
        <div className = "timer">
          <div className = "timeDisplay" id="timer-label">25:00</div>
          <div className = "startResetBtn"  id="start_stop">Start/Pause</div>
          <div className = "startResetBtn" id="reset">Reset</div>

          <label id="session-label">Break</label>
          <div className = "adjustBtn" id="session-increment">+</div>
          <div className = "sessionDisplay" id="session-length">25 mins</div>
          <div className = "adjustBtn" id="session-decrement">-</div>
 
          <label id="break-label">Break</label>
          <div className = "adjustBtn" id="break-increment">+</div>
          <div className = "breakDisplay" id="break-length">5 mins</div>
          <div className = "adjustBtn" id="break-decrement">-</div>
      </div>
    </div>
  );
}

export default App;
