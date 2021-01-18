import React from 'react';
import Timer from './Timer';
import TimerConfig from './TimerConfig';
import soundUrl from './beep.wav';
import styled from 'styled-components';
import styleSettings from './styleSettings';
import formatTime from './utils/formatTime';
import capitalizeFirstLetter from './utils/capitalizeFirstLetter';

const PomodoroWrapper = styled.main`
  font-family: ${styleSettings.fonts.body};
  max-width: 600px;
  background-color: ${styleSettings.colors.primary};
  color: #000000;
  padding: 30px;
  margin: 30px auto;
  box-shadow: 5px 5px 0;
`;

const Heading = styled.h1`
  text-align: center;
  font-size: 48px;
  font-family: ${styleSettings.fonts.heading};
`;

const INITIAL_INTERVALS = {
  sessionLength: 25,
  breakLength: 5,
};

let interval;
class Pomodoro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSessionType: 'session',
      breakLength: 5,
      errorMessage: '',
      sessionLength: 25,
      remainingTime: 1500,
      timerIsActive: false,
      timer: null,
    };

    this.onIntervalChange = this.onIntervalChange.bind(this);
    this.handleCountdown = this.handleCountdown.bind(this);
    this.handleStartStopClick = this.handleStartStopClick.bind(this);
    this.handleResetClick = this.handleResetClick.bind(this);
  }

  resetTimer(resetToInitial = false) {
    document.title = 'Pomodoro';
    this.rewindAudio();
    this.setState(
      {
        timerIsActive: false,
        remainingTime: this.state.sessionLength * 60,
        activeSessionType: 'session',
      },
      () => {
        clearInterval(interval);
      }
    );
  }

  pauseTimer() {
    this.setState(
      {
        timerIsActive: false,
      },
      () => {
        clearInterval(interval);
      }
    );
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
    switch (this.state.activeSessionType) {
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
      const { activeSessionType } = this.state;
      const newRemainingTime = this.state.remainingTime - 1;
      document.title = `${capitalizeFirstLetter(
        activeSessionType
      )}: ${formatTime(newRemainingTime)}`;
      this.setState({
        remainingTime: newRemainingTime,
      });
    } else {
      const nextSessionType = this.getNextSessionType();
      const lengthKey = `${nextSessionType}Length`;
      const newRemainingTime = this.state[lengthKey] * 60;
      this.playAudio();

      this.setState({
        activeSessionType: nextSessionType,
        autoplayAudio: true,
        remainingTime: newRemainingTime,
      });
    }
  }

  activateTimer() {
    this.setState(
      {
        timerIsActive: true,
        errorMessage: '',
      },
      () => {
        interval = setInterval(this.handleCountdown, 1000);
      }
    );
  }

  onIntervalChange(property, value) {
    this.setState(
      {
        [property]: value,
      },
      this.resetTimer
    );
  }

  timerLengthsAreValid() {
    if (!this.state.sessionLength || !this.state.breakLength) {
      return false;
    }

    return true;
  }

  handleStartStopClick() {
    if (!this.timerLengthsAreValid()) {
      this.setState({
        errorMessage: 'Please enter valid session lengths.',
      });
      return;
    }

    if (!this.state.timerIsActive) {
      this.activateTimer();
    } else {
      this.pauseTimer();
    }
  }

  handleResetClick() {
    this.setState(INITIAL_INTERVALS, this.resetTimer);
  }

  render() {
    return (
      <PomodoroWrapper>
        <Heading>Pomodoro</Heading>
        <TimerConfig
          errorMessage={this.state.errorMessage}
          onIntervalChange={this.onIntervalChange}
          breakLength={this.state.breakLength}
          sessionLength={this.state.sessionLength}
        />
        <Timer
          activeSessionType={this.state.activeSessionType}
          timerIsActive={this.state.timerIsActive}
          remainingTime={this.state.remainingTime}
          handleResetClick={this.handleResetClick}
          handleStartStopClick={this.handleStartStopClick}
        />
        <audio id="beep" src={soundUrl} />
      </PomodoroWrapper>
    );
  }
}

export default Pomodoro;
