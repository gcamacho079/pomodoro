import logo from './logo.svg';
import './App.css';
import Timer from './Timer';
import TimerConfig from './TimerConfig';

function App() {
  return (
    <div className="App">
      <h1>Pomodoro</h1>
      <TimerConfig />
      <Timer />
    </div>
  );
}

export default App;
