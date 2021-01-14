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
    this.handleCountdown = this.handleCountdown.bind(this);
    this.handleStartStopClick = this.handleStartStopClick.bind(this);
    this.handleResetClick = this.handleResetClick.bind(this);
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

  getNewActiveState() {
    switch(this.state.activeState) {
      case 'session':
        return 'break';
      case 'break':
        return 'session';
      default:
        return 'session';
    }
  }

  handleCountdown() {
    if (this.state.remainingTime !== 0) {
      this.setState(({
        remainingTime: this.state.remainingTime - 1,
      }));
    } else {
      const newActiveState = this.getNewActiveState();
      const lengthKey = `${newActiveState}Length`;
      const newRemainingTime = this.state[lengthKey] * 60;
      
      this.setState(() => ({
        activeState: newActiveState,
        remainingTime: newRemainingTime,
      }));
    }
  }

  activateTimer() {
    this.setState(({
      timerIsActive: true,
    }), () => {
      interval = setInterval(this.handleCountdown, 1000);
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

  handleResetClick() {
    this.resetTimer();
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
          handleResetClick={this.handleResetClick}
          handleStartStopClick={this.handleStartStopClick}/>
      </div>
    );
  }
}

export default Pomodoro;
