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
      <h2 id="timer-label">Session</h2>
      <span id="time-left">{formatTime(props.remainingTime)}</span>
      <button id="reset">Reset</button>
      <button onClick={props.handleStartStopClick} id="start_stop">
        {props.timerIsActive ? 'Stop' : 'Start'}
      </button>
    </>
  )
};

export default Timer;
