import { Menu } from 'antd';
import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { AuthConsumer } from './../../services';
import './Navigation.less';

class Navigation extends React.Component {
  public render() {
    return (
      <AuthConsumer>
        {({ isLoggedIn, logout }) => (
          <Menu
            className="Navigation"
            mode="horizontal"
            defaultSelectedKeys={['1']}
            style={{ backgroundColor: 'transparent' }}>
            <Menu.Item key="1">
              <NavLink exact={true} to="/">
                Home
              </NavLink>
            </Menu.Item>
            {!isLoggedIn && (
              <Menu.Item key="2">
                <NavLink to="/register">Register</NavLink>
              </Menu.Item>
            )}
            {!isLoggedIn && (
              <Menu.Item key="3">
                <NavLink to="/login">Login</NavLink>
              </Menu.Item>
            )}
            {isLoggedIn && (
              <Menu.Item key="4" onClick={logout}>
                Logout
              </Menu.Item>
            )}
          </Menu>
        )}
      </AuthConsumer>
    );
  }
}

export default Navigation;
