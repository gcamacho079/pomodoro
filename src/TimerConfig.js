import React from 'react';
import getNewValue from './utils/getNewValue';

const getStateProperty = (id) => {
  let property = '';

  if (id.includes('break')) {
    property = 'breakLength';
  } else if (id.includes('session')) {
    property = 'sessionLength';
  }

  return property;
};

class TimerConfig extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      breakLength: 5,
      sessionLength: 25
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { target } = event;
    const value = parseInt(target.value, 10);
    const stateProp = getStateProperty(target.id);

    if (value <= 0) return;

    this.setState(state => ({
      [stateProp]: value
    }));
  }

  handleClick(event) {
    const { target } = event;
    const { action } = target.dataset;
    const stateProp = getStateProperty(target.id);
    const newValue = getNewValue(this.state[stateProp], action);

    this.setState(state => ({
      [stateProp]: newValue
    }));
  }

  render() {
    return (
      <div>
        <div>
          <label id="break-label" htmlFor="break-length">Break Length</label>
          <input onChange={this.handleChange} type="number" id="break-length" value={this.state.breakLength} />
          <button onClick={this.handleClick} data-action="decrement" id="break-decrement">-</button>
          <button onClick={this.handleClick} data-action="increment" id="break-increment">+</button>
        </div>
        <div>
          <label id="session-label">Session Length</label>
          <input onChange={this.handleChange} type="number" id="session-length" value={this.state.sessionLength}/>
          <button onClick={this.handleClick} data-action="decrement" id="session-decrement">-</button>
          <button onClick={this.handleClick} data-action="increment" id="session-increment">+</button>
        </div>
      </div>
    )
  }
};

export default TimerConfig;
