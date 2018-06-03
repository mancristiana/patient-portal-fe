// import { Card, message } from 'antd';
import { Card } from 'antd';
import * as React from 'react';
// import { AuthService } from './../../services';
// import { Auth, Response, Token } from './../../shared';
import { Auth } from './../../shared';
import './Login.less';
import LoginForm from './LoginForm';

interface ILoginProps {
  onLogin: () => void;
}

class Login extends React.Component<ILoginProps, object> {
  public render() {
    return (
      <div className="Login">
        <Card title="Login">
          <LoginForm onSubmit={this.processForm} />
        </Card>
      </div>
    );
  }

  private processForm = (user: Auth) => {
    // const hide = message.loading('Verifying credentials', 0);
    this.props.onLogin();
    // AuthService.login(user).then((response: Response<Token>) => {
    //   setTimeout(hide, 0);
    //   if (response.success) {
    //     message.success('Successful login');

    //     // Redirect
    //   } else {
    //     message.error('Incorrect credentials');
    //   }
    // });
  };
}

export default Login;
