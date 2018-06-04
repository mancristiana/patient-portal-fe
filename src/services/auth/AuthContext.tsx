import * as React from 'react';
import { Auth } from './../../shared';

interface IAuthContext {
  isLoggedIn: boolean;
  login: (user: Auth) => void;
  logout: () => void;
}

const defaultState = {
  isLoggedIn: false,
  login: () => {
    console.log('Oh');
  },
  logout: () => {
    console.log('Oh');
  }
};

const { Provider, Consumer: AuthConsumer } = React.createContext<IAuthContext>(
  defaultState
);

interface IAuthProviderProps {
  children: React.ReactNode;
}

class AuthProvider extends React.Component<IAuthProviderProps, IAuthContext> {
  constructor(props) {
    super(props);
    this.state = {
      ...defaultState,
      login: this.login,
      logout: this.logout
    };
  }

  public login = (user: Auth) => {
    console.log('LOGIN WAS CALLED');
    this.setState({
      isLoggedIn: true
    });
  };

  public logout = () => {
    console.log('LOGOUT WAS CALLED');
    this.setState({
      isLoggedIn: false
    });
  };

  public render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}

export { AuthConsumer, AuthProvider, IAuthContext };
