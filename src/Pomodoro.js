import React from 'react';
import Timer from './Timer';
import TimerConfig from './TimerConfig';

class Pomodoro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeState: 'session',
      breakLength: 5,
      sessionLength: 25,
      remainingTime: 1500,
      timerIsActive: false,
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
        <TimerConfig 
          onIntervalChange={this.onIntervalChange} 
          breakLength={this.state.breakLength} 
          sessionLength={this.state.sessionLength}/>
        <Timer 
          activeState={this.state.activeState} 
          timerIsActive={this.state.timerIsActive} 
          remainingTime={this.state.remainingTime}/>
      </div>
    );
  }
}

export default Pomodoro;
