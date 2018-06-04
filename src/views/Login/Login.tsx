// import { Card, message } from 'antd';
import { Card } from 'antd';
import * as React from 'react';
import { AuthConsumer } from './../../services/auth/index';
// import { AuthService } from './../../services';
// import { Auth, Response, Token } from './../../shared';
// import { Auth } from './../../shared';
import './Login.less';
import LoginForm from './LoginForm';

class Login extends React.Component {
  public render() {
    return (
      <AuthConsumer>
        {({ isLoggedIn, login }) => (
          <div className="Login">
            <Card title="Login">
              <LoginForm onSubmit={login} />
            </Card>
          </div>
        )}
      </AuthConsumer>
    );
  }

  // private processForm = (user: Auth) => {
  // const hide = message.loading('Verifying credentials', 0);
  // AuthService.login(user).then((response: Response<Token>) => {
  //   setTimeout(hide, 0);
  //   if (response.success) {
  //     message.success('Successful login');
  //     // Redirect
  //   } else {
  //     message.error('Incorrect credentials');
  //   }
  // });
  // };
}

export default Login;
