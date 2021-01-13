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
    this.handleStartStopClick = this.handleStartStopClick.bind(this);
  }

  onIntervalChange(property, value) {
    this.setState((state) => ({
      [property]: value,
    }));
  }

  handleStartStopClick(event) {
    if (!this.state.timerIsActive) {
      setInterval(() => {
        this.setState(() => ({
          remainingTime: this.state.remainingTime - 1,
        }));
      }, 1000);
    }
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
          remainingTime={this.state.remainingTime}
          handleStartStopClick={this.handleStartStopClick}/>
      </div>
    );
  }
}

export default Pomodoro;
