import * as React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { AuthConsumer } from './../services/auth/index';

const GuestRoute = ({ component: Component, ...rest }) => (
  <AuthConsumer>
    {({ isLoggedIn }) => (
      <Route
        {...rest}
        render={props =>
          !isLoggedIn ? <Component {...props} /> : <Redirect to="/" />
        }
      />
    )}
  </AuthConsumer>
);

export default GuestRoute;
