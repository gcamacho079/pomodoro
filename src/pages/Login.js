import React from 'react';
import { navigate } from '@reach/router';
import firebase from 'firebase';
import FormError from '../components/FormError';
import { Form } from '../style';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      errorMessage: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { email, password } = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        this.props.logInUser(userCredential.user);
        navigate('/');
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
      <Form onSubmit={this.handleSubmit}>
        {this.state.errorMessage && (
          <FormError message={this.state.errorMessage} />
        )}
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

        <button type="submit">Login</button>
      </Form>
    );
  }
}

export default Login;
