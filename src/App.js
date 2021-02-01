import { Router } from '@reach/router';
import React from 'react';
import firebase from './Firebase';
import Navigation from './Navigation';
import Pomodoro from './Pomodoro';
import Login from './Login.js';
import Register from './Register.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
  }

  componentDidMount() {
    const ref = firebase.database().ref('user');

    ref.on('value', (snapshot) => {
      let user = snapshot.val();
      this.setState({
        user: user,
      });
    });
  }

  render() {
    return (
      <>
        <Navigation user={this.state.user} />
        <Router>
          <Pomodoro path="/" />
          <Login path="/login" />
          <Register path="/register" />
        </Router>
      </>
    );
  }
}

export default App;
