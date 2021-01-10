import logo from './logo.svg';
import './App.css';
import Timer from './Timer';
import BreakController from './BreakController';
import SessionController from './SessionController';

function App() {
  return (
    <div className="App">
      <h1>Pomodoro</h1>
      <BreakController />
      <SessionController />
      <Timer />
    </div>
  );
}

export default App;
