import { Button, Form, Icon, Input } from 'antd';
import { FormComponentProps } from 'antd/lib/form/Form';
import * as React from 'react';

const FormItem = Form.Item;

export interface LoginProps {
  onSubmit: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onChange: (event) => void;
  errors: {};
  successMessage: string;
  user: {
    email: string;
    password: string;
  };
}

class LoginForm extends React.Component<
  LoginProps & FormComponentProps,
  object
> {
  constructor(props: LoginProps & FormComponentProps) {
    super(props);
    this.state = {
      confirmDirty: false
    };
  }

  public render() {
    const { getFieldDecorator } = this.props.form;
    const renderIcon = (type: string) => (
      <Icon type={type} style={{ color: 'rgba(0,0,0,.25)' }} />
    );

    const fieldsData = [
      {
        name: 'email',
        placeholder: 'Email',
        prefix: renderIcon('mail'),
        type: 'email'
      },
      {
        name: 'password',
        placeholder: 'Password',
        prefix: renderIcon('lock'),
        type: 'password'
      }
    ];

    return (
      <Form
        className="AccountForm"
        layout="horizontal"
        onSubmit={this.props.onSubmit}>
        {fieldsData.map((item, key) => (
          <FormItem key={key}>
            {getFieldDecorator(item.name)(
              <Input {...item} onChange={this.props.onChange} />
            )}
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

const WrappedLoginForm = Form.create<LoginProps>()(LoginForm);

export default WrappedLoginForm;
