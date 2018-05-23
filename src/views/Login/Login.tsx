import { Card } from 'antd';
import * as React from 'react';
import './Login.less';
import LoginForm from './LoginForm';

export interface State {
  errors: object;
  successMessage: string;
  user: {
    email: string;
    password: string;
  };
}

class Login extends React.Component<object, State> {
  constructor(props) {
    super(props);
    this.state = {
      errors: {},
      successMessage: '',
      user: {
        email: '',
        password: ''
      }
    };
  }

  public componentDidMount() {
    // const storedMessage = localStorage.getItem('successMessage');
    // let successMessage = '';
    // if (storedMessage) {
    //   successMessage = storedMessage;
    //   localStorage.removeItem('successMessage');
    // }
  }

  public render() {
    return (
      <div className="Login">
        <Card title="Login">
          <LoginForm
            onSubmit={this.processForm}
            onChange={this.changeUser}
            errors={this.state.errors}
            successMessage={this.state.successMessage}
            user={this.state.user}
          />
        </Card>
      </div>
    );
  }

  /**
   * Process the form.
   *
   * @param {object} event - the JavaScript event object
   */
  private processForm = event => {
    // prevent default action. in this case, action is the form submission event
    event.preventDefault();

    // create a string for an HTTP body message
    const email = encodeURIComponent(this.state.user.email);
    const password = encodeURIComponent(this.state.user.password);
    const formData = `email=${email}&password=${password}`;
    console.log('FormData', formData);
  };

  /**
   * Change the user object.
   *
   * @param {object} event - the JavaScript event object
   */
  private changeUser = event => {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;
    console.log('User state', this.state.user);

    this.setState({
      user
    });
  };
}

export default Login;
