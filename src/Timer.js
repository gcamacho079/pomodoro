import styled from 'styled-components';

const Button = styled.button`
  margin: 10px;
  background-color: transparent;
  color: black;
  border-color: black;
  padding: 8px;
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
      <h2 id="timer-label">{props.activeSessionType === 'session' ? 'Session' : 'Break'}</h2>
      <TimerCountdown id="time-left">{formatTime(props.remainingTime)}</TimerCountdown>
      <Button onClick={props.handleResetClick} id="reset">Reset</Button>
      <Button onClick={props.handleStartStopClick} id="start_stop">
        {props.timerIsActive ? 'Stop' : 'Start'}
      </Button>
    </>
  )
};

export default Timer;
