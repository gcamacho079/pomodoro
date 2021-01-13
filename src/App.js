import logo from './logo.svg';
import React from 'react';
import './App.css';
import Timer from './Timer';
import TimerConfig from './TimerConfig';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      breakLength: 5,
      sessionLength: 25,
    }

    this.onIntervalChange = this.onIntervalChange.bind(this);
  }

  onIntervalChange(property, value) {
    this.setState((state) => ({
      [property]: value,
    }));
  }

  render() {
    return (
      <div className="App">
        <h1>Pomodoro</h1>
        <TimerConfig onIntervalChange={this.onIntervalChange} breakLength={this.state.breakLength} sessionLength={this.state.sessionLength}/>
        <Timer />
      </div>
    );
  }
}

export default App;
