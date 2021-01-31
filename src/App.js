import React from 'react';
import Navigation from './Navigation';
import Pomodoro from './Pomodoro';
import { Router } from '@reach/router';

class App extends React.Component {
  render() {
    return (
      <>
        <Navigation />
        <Router>
          <Pomodoro path="/" />
        </Router>
      </>
    );
  }
}

export default App;
