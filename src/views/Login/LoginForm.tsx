import { Button, Form, Icon, Input, message } from 'antd';
import {
  FormComponentProps,
  ValidateCallback,
  ValidationRule
} from 'antd/lib/form/Form';
import * as React from 'react';
import { Auth } from './../../models';

const FormItem = Form.Item;

interface ILoginErrors {
  email: { errors: ValidationRule[] };
  password: { errors: ValidationRule[] };
}

export interface ILoginProps {
  onSubmit: (user: Auth) => void;
}

class LoginForm extends React.Component<
  ILoginProps & FormComponentProps,
  object
> {
  constructor(props: ILoginProps & FormComponentProps) {
    super(props);
    this.state = { errors: {} };
  }

  public render() {
    const { getFieldDecorator } = this.props.form;
    const renderIcon = (type: string) => (
      <Icon type={type} style={{ color: 'rgba(0,0,0,.25)' }} />
    );

    const fieldsData = [
      {
        input: {
          placeholder: 'E-mail',
          prefix: renderIcon('mail'),
          type: 'text'
        },
        label: 'E-mail',
        name: 'email',
        validation: [
          {
            message: 'Please enter your e-mail',
            required: true
          },
          {
            message: 'The input is not valid e-mail!',
            type: 'email'
          }
        ]
      },
      {
        input: {
          placeholder: 'Password',
          prefix: renderIcon('lock'),
          type: 'password'
        },
        label: 'Password',
        name: 'password',
        validation: [
          {
            message: 'Please enter your password',
            required: true
          }
        ]
      }
    ];

    return (
      <Form
        className="AccountForm"
        layout="horizontal"
        onSubmit={this.handleSubmit}>
        {fieldsData.map((item, key) => (
          <FormItem key={key}>
            {getFieldDecorator(item.name, { rules: item.validation })(
              <Input {...item.input} />
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

  private handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { form } = this.props;
    event.preventDefault();
    form.validateFields(['email', 'password'], {}, this.submitOnValid);
  };

  private submitOnValid: ValidateCallback = (
    errors: ILoginErrors,
    values: Auth
  ) => {
    if (!errors) {
      this.props.onSubmit(values);
    } else {
      message.error('Please validate fields to Login!');
    }
  };
}

const WrappedLoginForm = Form.create<ILoginProps>()(LoginForm);

export default WrappedLoginForm;
