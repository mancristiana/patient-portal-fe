import { Menu } from 'antd';
import * as React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.less';

const { Item } = Menu;

class Navigation extends React.PureComponent {
  public render() {
    return (
      <Menu
        className="Navigation"
        mode="horizontal"
        defaultSelectedKeys={['1']}
        style={{ backgroundColor: 'transparent' }}>
        <Item key="1">
          <NavLink exact={true} to="/">
            Home
          </NavLink>
        </Item>

        <Item key="2">
          {' '}
          <NavLink to="/register">Register</NavLink>
        </Item>
      </Menu>
    );
  }
}

export default Navigation;
