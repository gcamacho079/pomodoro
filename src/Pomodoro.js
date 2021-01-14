import React from 'react';
import Timer from './Timer';
import TimerConfig from './TimerConfig';
import soundUrl from './beep.wav';
import styled from 'styled-components';

const PomodoroWrapper = styled.div`
  max-width: 600px;
  background-color: lavender;
  padding: 30px;
  margin: 30px auto;
`;


let interval;
class Pomodoro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSessionType: 'session',
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
    this.rewindAudio();
    this.setState(({
      timerIsActive: false,
      remainingTime: this.state.sessionLength * 60,
      activeSessionType: 'session',
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

  playAudio() {
    const audioElement = document.querySelector('#beep');
    audioElement.play();
  }

  rewindAudio() {
    const audioElement = document.querySelector('#beep');
    audioElement.pause();
    audioElement.currentTime = 0;
  }
 
  getNextSessionType() {
    switch(this.state.activeSessionType) {
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
      const nextSessionType = this.getNextSessionType();
      const lengthKey = `${nextSessionType}Length`;
      const newRemainingTime = this.state[lengthKey] * 60;
      this.playAudio();
      
      this.setState(({
        activeSessionType: nextSessionType,
        autoplayAudio: true,
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
    this.setState(({
      sessionLength: 25,
      breakLength: 5,
    }), this.resetTimer);
  }

  render() {
    return (
      <PomodoroWrapper>
        <h1>Pomodoro</h1>
        <TimerConfig 
          onIntervalChange={this.onIntervalChange} 
          breakLength={this.state.breakLength} 
          sessionLength={this.state.sessionLength}/>
        <Timer 
          activeSessionType={this.state.activeSessionType} 
          timerIsActive={this.state.timerIsActive} 
          remainingTime={this.state.remainingTime}
          handleResetClick={this.handleResetClick}
          handleStartStopClick={this.handleStartStopClick}/>
        <audio id="beep" src={soundUrl}/>
      </PomodoroWrapper>
    );
  }
}

export default Pomodoro;
