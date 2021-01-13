const addLeadingZeroes = (value) => {
  let string = value + '';
  string = '00' + string;
  const finalDigits = string.slice(-2);
  return finalDigits;
};

const formatTime = (totalSeconds) => {
  const minutes = Math.floor(totalSeconds / 60);

  // This doesn't make sense right now, just a placeholder
  const seconds = totalSeconds % minutes;

  const minutesString = addLeadingZeroes(minutes);
  const secondsString = addLeadingZeroes(seconds);

  const timeString = `${minutesString}:${secondsString}`;
  return timeString;
};

const Timer = (props) => {
  return (
    <div>
      <h2 id="timer-label">Session</h2>
      <span id="time-left">{formatTime(props.remainingTime)}</span>
      <button id="reset">Reset</button>
      <button id="start_stop">Start/Stop</button>
    </div>
  )
};

export default Timer;
