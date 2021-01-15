import { Button, TimerLabel, ButtonRow, TimerCountdown, TimerWrapper } from './style';

const addLeadingZeroes = (value) => {
  let string = value + '';
  string = '00' + string;
  const finalDigits = string.slice(-2);
  return finalDigits;
};

const formatTime = (totalSeconds) => {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  const minutesString = addLeadingZeroes(minutes);
  const secondsString = addLeadingZeroes(seconds);

  const timeString = `${minutesString}:${secondsString}`;
  return timeString;
};

const Timer = (props) => {
  return (
    <TimerWrapper>
      <TimerLabel id="timer-label">{props.activeSessionType === 'session' ? 'Session' : 'Break'}</TimerLabel>
      <TimerCountdown id="time-left">{formatTime(props.remainingTime)}</TimerCountdown>
      <ButtonRow>
        <Button onClick={props.handleResetClick} id="reset">Reset</Button>
        <Button onClick={props.handleStartStopClick} id="start_stop">
          {props.timerIsActive ? 'Stop' : 'Start'}
        </Button>
      </ButtonRow>
    </TimerWrapper>
  )
};

export default Timer;
