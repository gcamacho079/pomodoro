import React from 'react';
import { Link } from '@reach/router';

const Navigation = (props) => {
  const { user } = props;
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {!user && (
          <li>
            <Link to="/login">Login</Link>
          </li>
        )}
        {user && (
          <li>
            {user && <p>Welcome back, {user}</p>}
            <Link to="/logout">Logout</Link>
          </li>
        )}

        <li>
          <Link to="/register">Register</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
