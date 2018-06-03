import * as React from 'react';

interface IAuthContext {
  isLoggedIn: boolean;
  // logout: () => void;
}

const defaultState = {
  isLoggedIn: false
  // logout: () => {}
};

const { Provider, Consumer } = React.createContext<IAuthContext>(defaultState);

export { IAuthContext, Provider, Consumer, defaultState };
