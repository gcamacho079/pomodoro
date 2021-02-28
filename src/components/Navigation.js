import React from 'react';
import { Link } from '@reach/router';
import { Nav, NavList } from '../style';

const Navigation = (props) => {
  const { user, logoutUser } = props;
  return (
    <Nav>
      <NavList>
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
            <span>Welcome back, {user.displayName}. </span>
            <Link onClick={logoutUser} to="/logout">
              Logout
            </Link>
          </li>
        )}
        {!user && (
          <li>
            <Link to="/register">Register</Link>
          </li>
        )}
      </NavList>
    </Nav>
  );
};

export default Navigation;
