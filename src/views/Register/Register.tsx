import {Card} from 'antd';
import * as React from 'react';

import './Register.less';
import RegisterForm from './RegisterForm';

class RegisterView extends React.Component {
  public register = (form) => {
    console.log('Form data', form)
  }

  public render() {
    return (
      <div className="Register">
        <Card title="Register">
          <RegisterForm onSubmit={this.register}/>
        </Card>
      </div>
    );
  }
}

export default RegisterView;