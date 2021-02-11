import { Router, navigate } from '@reach/router';
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
      displayName: null,
      userID: null,
    };

    this.registerUser = this.registerUser.bind(this);
    this.logoutUser = this.logoutUser.bind(this);
  }

  componentDidMount() {
    // const ref = firebase.database().ref('user');
    // ref.on('value', (snapshot) => {
    //   let user = snapshot.val();
    //   this.setState({
    //     user: user,
    //   });
    // });
  }

  logoutUser(event) {
    event.preventDefault();
    this.setState({
      displayName: null,
      user: null,
      userID: null,
    });

    firebase
      .auth()
      .signOut()
      .then(() => {
        navigate('/login');
      });
  }

  registerUser(displayName) {
    firebase.auth().onAuthStateChanged((user) => {
      user
        .updateProfile({
          displayName: displayName,
        })
        .then(() => {
          this.setState({
            user: user,
            displayName: user.displayName,
            userID: user.uid,
          });
        });

      navigate('/');
    });
  }

  render() {
    return (
      <>
        <Navigation user={this.state.user} logoutUser={this.logoutUser} />
        <Router>
          <Pomodoro path="/" />
          <Login path="/login" />
          <Register path="/register" registerUser={this.registerUser} />
        </Router>
      </>
    );
  }
}

export default App;
