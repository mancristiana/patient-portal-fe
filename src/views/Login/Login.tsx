import { Card, message } from 'antd';
import * as React from 'react';
import { IUser } from './IUser';
import './Login.less';
import LoginForm from './LoginForm';

class Login extends React.Component {
  public render() {
    return (
      <div className="Login">
        <Card title="Login">
          <LoginForm onSubmit={this.processForm} />
        </Card>
      </div>
    );
  }

  private processForm = (user: IUser) => {
    // create a string for an HTTP body message
    const email = encodeURIComponent(user.email);
    const password = encodeURIComponent(user.password);
    const formData = `email=${email}&password=${password}`;
    console.log('FormData', formData);

    // const success = message.success('Login was successfull', 0);
    const hide = message.loading('Verifying credentials', 0);
    // Dismiss manually and asynchronously
    setTimeout(hide, 2500);
  };
}

export default Login;
