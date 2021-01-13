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

const getInputMin = (input) => parseInt(input.getAttribute('min'), 10);

const getInputMax = (input) => parseInt(input.getAttribute('max'), 10);
class TimerConfig extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { target } = event;
    const value = parseInt(target.value, 10);

    if (typeof value !== 'number') return;

    const stateProp = getStateProperty(target.id);
    const inputMin = getInputMin(target);
    const inputMax = getInputMax(target);

    if (value < inputMin 
     || value > inputMax) return;

    this.props.onIntervalChange(stateProp, value);
  }

  handleClick(event) {
    const { target } = event;
    const { action } = target.dataset;
    const parentNode = target.parentNode;
    const targetInput = parentNode.querySelector('input');
    const stateProp = getStateProperty(target.id);
    const newValue = getNewValue(this.props[stateProp], action);
    const inputMin = getInputMin(targetInput);
    const inputMax = getInputMax(targetInput);

    if (newValue < inputMin || newValue > inputMax) return;

    this.props.onIntervalChange(stateProp, newValue);
    // this.setState(state => ({
    //   [stateProp]: newValue
    // }));
  }

  render() {
    return (
      <div>
        <div>
          <label id="break-label" htmlFor="break-length">Break Length</label>
          <input onChange={this.handleChange} min="1" max="60" type="number" id="break-length" value={this.props.breakLength} />
          <button onClick={this.handleClick} data-action="decrement" id="break-decrement">-</button>
          <button onClick={this.handleClick} data-action="increment" id="break-increment">+</button>
        </div>
        <div>
          <label id="session-label">Session Length</label>
          <input onChange={this.handleChange} min="1" max="60" type="number" id="session-length" value={this.props.sessionLength}/>
          <button onClick={this.handleClick} data-action="decrement" id="session-decrement">-</button>
          <button onClick={this.handleClick} data-action="increment" id="session-increment">+</button>
        </div>
      </div>
    )
  }
};

export default TimerConfig;
