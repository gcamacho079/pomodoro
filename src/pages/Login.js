import React from 'react';
import navigate from '@reach/router';
import FormError from '../components/FormError';

class Login extends React.Component {
  render() {
    return (
      <form>
        <FormError />
        <label className="form__label" htmlFor="email">
          Email Address
        </label>
        <input
          className="form__control"
          id="email"
          type="text"
          name="email"
          placeholder="Email Address"
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
          required
        ></input>

        <button type="submit">Login</button>
      </form>
    );
  }
}

export default Login;
