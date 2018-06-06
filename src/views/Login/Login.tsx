import { Card } from 'antd';
import * as React from 'react';
import { AuthConsumer } from './../../services';
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
}

export default Login;
