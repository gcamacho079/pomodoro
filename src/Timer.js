import styled from 'styled-components';

const ButtonRow = styled.div`
  display: grid;
  grid-column-gap: 30px;
  grid-template-columns: 1fr 1fr;
`;

const Button = styled.button`
  margin: 10px;
  background-color: transparent;
  color: black;
  border-color: black;
  border-width: 3px;
  padding: 8px;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
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
