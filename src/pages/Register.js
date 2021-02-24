import React from 'react';
import firebase from '../Firebase';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: '',
      email: '',
      password: '',
      passwordConfirm: '',
      errorMessage: null,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const itemName = event.target.name;
    const value = event.target.value;

    this.setState(
      {
        [itemName]: value,
      },
      () => {
        if (this.state.password !== this.state.passwordConfirm) {
          this.setState({ errorMessage: 'Passwords do not match' });
        } else {
          this.setState({ errorMessage: null });
        }
      }
    );
  }

  handleSubmit(event) {
    const registrationInfo = {
      displayName: this.state.displayName,
      email: this.state.email,
      password: this.state.password,
    };

    event.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(
        registrationInfo.email,
        registrationInfo.password
      )
      .then(() => {
        this.props.registerUser(registrationInfo.displayName);
      })
      .catch((error) => {
        if (error.message !== null) {
          this.setState({
            errorMessage: error.message,
          });
        } else {
          this.setState({
            errorMessage: null,
          });
        }
      });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.state.errorMessage && <p>{this.state.errorMessage}</p>}
        <label className="form__label" htmlFor="display-name">
          Display Name
        </label>
        <input
          className="form__control"
          id="displayName"
          type="text"
          name="displayName"
          placeholder="Display Name"
          onChange={this.handleChange}
          value={this.state.displayName}
          required
        ></input>

        <label className="form__label" htmlFor="email">
          Email Address
        </label>
        <input
          className="form__control"
          id="email"
          type="text"
          name="email"
          placeholder="Email Address"
          onChange={this.handleChange}
          value={this.state.email}
          required
        ></input>

        <label className="form__label" htmlFor="password">
          Password
        </label>
        <input
          className="form__control"
          id="password"
          type="password"
          name="password"
          placeholder="Password"
          onChange={this.handleChange}
          value={this.state.password}
          required
        ></input>

        <label className="form__label" htmlFor="passwordConfirm">
          Confirm Password
        </label>
        <input
          className="form__control"
          id="passwordConfirm"
          type="password"
          name="passwordConfirm"
          placeholder="Password"
          onChange={this.handleChange}
          value={this.state.passwordConfirm}
          required
        ></input>

        <button type="submit">Register</button>
      </form>
    );
  }
}

export default Register;
