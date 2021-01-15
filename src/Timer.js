import styled from 'styled-components';
import { Button } from './style';

const TimerLabel = styled.h2`
  text-align: center;
`;

const ButtonRow = styled.div`
  display: grid;
  grid-column-gap: 30px;
  grid-template-columns: 1fr 1fr;
`;

const TimerCountdown = styled.div`
  font-size: 48px;
  text-align: center;
`;

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
    <>
      <TimerLabel id="timer-label">{props.activeSessionType === 'session' ? 'Session' : 'Break'}</TimerLabel>
      <TimerCountdown id="time-left">{formatTime(props.remainingTime)}</TimerCountdown>
      <ButtonRow>
        <Button onClick={props.handleResetClick} id="reset">Reset</Button>
        <Button onClick={props.handleStartStopClick} id="start_stop">
          {props.timerIsActive ? 'Stop' : 'Start'}
        </Button>
      </ButtonRow>
    </>
  )
};

export default Timer;
