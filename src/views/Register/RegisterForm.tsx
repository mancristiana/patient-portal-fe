import {Button, Form, Icon, Input, message} from 'antd';
import {
  FormComponentProps,
  ValidateCallback,
  ValidationRule
} from 'antd/lib/form/Form';
import * as React from 'react';
import {Register} from './../../shared';

const FormItem = Form.Item;

interface IRegisterErrors {
  email: { errors: ValidationRule[] };
  password: { errors: ValidationRule[] };
  name: { errors: ValidationRule[] };
  nationalId: { errors: ValidationRule[] };
  address: { errors: ValidationRule[] };
}

export interface IRegisterProps {
  onSubmit: (user: Register) => void;
}

class RegisterForm extends React.Component<IRegisterProps & FormComponentProps,
  object> {
  constructor(props: IRegisterProps & FormComponentProps) {
    super(props);
    this.state = {errors: {}};
  }

  public render() {
    const {getFieldDecorator} = this.props.form;
    const renderIcon = (type: string) => (
      <Icon type={type} style={{color: 'rgba(0,0,0,.25)'}}/>
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
      },
      {
        input: {
          placeholder: 'Password',
          prefix: renderIcon('lock'),
          type: 'password'
        },
        label: 'Password',
        name: 'passwordConfirm',
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
            {getFieldDecorator(item.name, {rules: item.validation})(
              <Input {...item.input} />
            )}
          </FormItem>
        ))}
        <FormItem>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </FormItem>
      </Form>
    );
  }

  private handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {form} = this.props;
    event.preventDefault();
    form.validateFields(['email', 'password', 'name', 'nationalId', 'phone', 'adress'], {}, this.submitOnValid);
  };

  private submitOnValid: ValidateCallback = (errors: IRegisterErrors,
                                             values) => {
    if (!errors) {
      const reg = {
        address: 'todo',
        email: values.email,
        name: 'todo',
        nationalId: 'todo',
        password: values.password,
        phone: 'todo'
      };
      this.props.onSubmit(reg);
    } else {
      message.error('Please validate fields to Login!');
    }
  };
}

const WrappedRegisterForm = Form.create<IRegisterProps>()(RegisterForm);

export default WrappedRegisterForm;
