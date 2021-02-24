import {
  Button,
  TimerLabel,
  ButtonRow,
  TimerCountdown,
  TimerWrapper,
} from '../style';
import formatTime from '../utils/formatTime';

const Timer = (props) => {
  return (
    <TimerWrapper>
      <TimerLabel id="timer-label">
        {props.activeSessionType === 'session' ? 'Session' : 'Break'}
      </TimerLabel>
      <TimerCountdown id="time-left">
        {formatTime(props.remainingTime)}
      </TimerCountdown>
      <ButtonRow>
        <Button onClick={props.handleResetClick} id="reset">
          Reset
        </Button>
        <Button onClick={props.handleStartStopClick} id="start_stop">
          {props.timerIsActive ? 'Stop' : 'Start'}
        </Button>
      </ButtonRow>
    </TimerWrapper>
  );
};

export default Timer;
