import logo from './logo.svg';
import './App.css';
import Timer from './Timer';

function App() {
  return (
    <div className="App">
      <h1>Pomodoro</h1>
      <label id="break-label">Break Length</label>
      <input type="number" id="break-length" value="5"/>
      <button id="break-decrement">-</button>
      <button id="break-increment">+</button>

      <label id="session-label">Session Length</label>
      <input type="number" id="session-length" value="25"/>
      <button id="session-decrement">-</button>
      <button id="session-increment">+</button>

      <Timer />
    </div>
  );
}

export default App;
