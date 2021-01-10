import React from 'react';
import getNewValue from './utils/getNewValue';

class BreakController extends React.Component {
  constructor(props) {
    super(props);
    this.state = { breakLength: 5 };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const { action } = event.target.dataset;
    const newValue = getNewValue(this.state.breakLength, action);

    this.setState(state => ({
      breakLength: newValue
    }));
  }

  render() {
    return (
      <div>
        <label id="break-label" for="break-length">Break Length</label>
        <input type="number" id="break-length" value={this.state.breakLength} />
        <button onClick={this.handleClick} data-action="decrement" id="break-decrement">-</button>
        <button onClick={this.handleClick} data-action="increment" id="break-increment">+</button>
      </div>
    )
  }
};

export default BreakController;
