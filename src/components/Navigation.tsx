import * as React from 'react';
import { NavLink } from 'react-router-dom';

class Navigation extends React.PureComponent {
  public render() {
    return (
      <nav>
        <NavLink exact={true} to="/">
          Home
        </NavLink>
        <NavLink to="/hello">Hello</NavLink>
      </nav>
    );
  }
}

export default Navigation;
