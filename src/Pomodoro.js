import React from 'react';
import Timer from './Timer';
import TimerConfig from './TimerConfig';

let interval;
class Pomodoro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeState: 'session',
      breakLength: 5,
      sessionLength: 25,
      remainingTime: 1500,
      timerIsActive: false,
      timer: null,
    }

    this.onIntervalChange = this.onIntervalChange.bind(this);
    this.handleStartStopClick = this.handleStartStopClick.bind(this);
  }

  resetTimer() {
    this.setState(({
      timerIsActive: false,
      remainingTime: this.state.sessionLength * 60,
      activeState: 'session',
    }), () => {
      clearInterval(interval);
    });
  }

  pauseTimer() {
    this.setState(({
      timerIsActive: false,
    }), () => {
      clearInterval(interval);
    });
  }

  activateTimer() {
    this.setState(({
      timerIsActive: true,
    }), () => {
      interval = setInterval(() => {
        this.setState(({
          remainingTime: this.state.remainingTime - 1,
        }));
      }, 1000);
    });
  }

  onIntervalChange(property, value) {
    this.setState(({
      [property]: value,
    }), this.resetTimer);
  }

  handleStartStopClick() {
    if (!this.state.timerIsActive) {
      this.activateTimer();
    } else {
      this.pauseTimer();
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
