import { Button, Form, Icon, Input } from 'antd';
import * as React from 'react';

const FormItem = Form.Item;

export interface Props {
  onSubmit: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onChange: (event) => void;
  errors: {};
  successMessage: string;
  user: {
    email: string;
    password: string;
  };
}

class LoginForm extends React.Component<Props, object> {
  constructor(props) {
    super(props);
    this.state = {
      confirmDirty: false
    };
  }

  public render() {
    const renderIcon = (type: string) => (
      <Icon type={type} style={{ color: 'rgba(0,0,0,.25)' }} />
    );

    const fieldsData = [
      {
        placeholder: 'Email',
        prefix: renderIcon('mail'),
        type: 'email'
      },
      {
        placeholder: 'Password',
        prefix: renderIcon('lock'),
        type: 'password'
      }
    ];

    return (
      <Form className="AccountForm" layout="horizontal">
        {fieldsData.map((item, key) => (
          <FormItem key={key}>
            <Input {...item} onChange={this.props.onChange} />
          </FormItem>
        ))}
        <FormItem>
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </FormItem>
      </Form>
    );
  }
}

export default LoginForm;
