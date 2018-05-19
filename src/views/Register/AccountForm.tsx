import { Form, Icon, Input } from 'antd';
import { FormComponentProps } from 'antd/lib/form/Form';
import * as React from 'react';
const FormItem = Form.Item;

export interface State {
  confirmDirty: boolean;
}

class HorizontalLoginForm extends React.Component<FormComponentProps, State> {
  constructor(props) {
    super(props);
    this.state = {
      confirmDirty: false
    };
  }

  public render() {
    const { getFieldDecorator } = this.props.form;

    const formItemLayout = {
      labelCol: {
        sm: { span: 8 },
        xs: { span: 24 }
      },
      wrapperCol: {
        sm: { span: 16 },
        xs: { span: 24 }
      }
    };

    const accountFields = [
      {
        icon: 'user',
        label: 'E-mail',
        name: 'email',
        placeholder: 'Type your unique e-mail',
        type: 'email',
        validation: [{ required: true, message: 'Please input your username!' }]
      },
      {
        icon: 'lock',
        label: 'Password',
        name: 'password',
        placeholder: 'Confirm Password',
        type: 'password',
        validation: [
          { required: true, message: 'Please confirm your Password!' },
          {
            validator: this.validatePassword
          }
        ]
      },
      {
        icon: 'lock',
        label: 'Confirm Password',
        name: 'confirm',
        placeholder: 'Password',
        type: 'password',
        validation: [
          { required: true, message: 'Please input your Password!' },
          {
            validator: this.validatePassword
          }
        ]
      }
    ];

    return (
      <Form
        className="AccountForm"
        layout="vertical"
        onSubmit={this.handleSubmit}>
        {accountFields.map(item => (
          <FormItem {...formItemLayout} label={item.label}>
            {getFieldDecorator(item.name, {
              rules: item.validation
            })(
              <Input
                type={item.type}
                prefix={
                  <Icon type={item.icon} style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                placeholder={item.placeholder}
              />
            )}
          </FormItem>
        ))}
      </Form>
    );
  }

  private handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  private validatePassword = (rule, value, callback) => {
    const form = this.props.form;
    if (
      value &&
      this.state.confirmDirty &&
      form.getFieldValue('password') !== form.getFieldValue('confirm')
    ) {
      callback('The passwords must be the same');
    }
    callback();
  };
}

const WrappedHorizontalLoginForm = Form.create()(HorizontalLoginForm);

export default WrappedHorizontalLoginForm;
