import { message } from 'antd';
import * as React from 'react';
import { Auth, Response, Token } from './../../shared';
import { AuthService } from './../auth';

interface IAuthProviderProps {
  children: React.ReactNode;
}

interface IAuthContext {
  isLoggedIn: boolean;
  login: (user: Auth) => void;
  logout: () => void;
}

const defaultState = {
  isLoggedIn: false,
  login: () => {
    // empty
  },
  logout: () => {
    // empty
  }
};

const Context = React.createContext<IAuthContext>(defaultState);
const AuthConsumer = Context.Consumer;

class AuthProvider extends React.Component<IAuthProviderProps, IAuthContext> {
  constructor(props) {
    super(props);
    this.state = {
      ...defaultState,
      login: this.login,
      logout: this.logout
    };
  }

  public componentDidMount() {
    const isLoggedIn = AuthService.isLoggedIn();
    this.setState({ isLoggedIn });
  }

  public login = (user: Auth) => {
    const hide = message.loading('Verifying credentials', 0);
    AuthService.login(user).then((response: Response<Token>) => {
      setTimeout(hide, 0);
      if (response.success) {
        message.success('Successful login');
        this.setState({
          isLoggedIn: true
        });
      } else {
        message.error('Incorrect credentials');
      }
    });
  };

  public logout = () => {
    AuthService.logout();
    this.setState({
      isLoggedIn: false
    });
  };

  public render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export { AuthConsumer, AuthProvider, IAuthContext };
