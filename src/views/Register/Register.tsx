import { Button, Card, Form, Input, message, Select } from 'antd';
import { FormComponentProps } from 'antd/lib/form/Form';
import * as React from 'react';

import './Register.less';

const FormItem = Form.Item;
const Option = Select.Option;

export interface Props {
  onSubmit: (formData) => void;
}

export interface State {
  confirmDirty: boolean;
}

class Register extends React.Component<Props & FormComponentProps, State> {
  constructor(props) {
    super(props);
    this.state = {
      confirmDirty: false
    };
  }

  public render() {
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

    const tailFormItemLayout = {
      wrapperCol: {
        sm: {
          offset: 8,
          span: 16
        },
        xs: {
          offset: 0,
          span: 24
        }
      }
    };

    return (
      <div className="Register">
        <Card title="Register">
          <Form
            className="AccountForm"
            layout="horizontal"
            onSubmit={this.handleSubmit}>
            {this.renderFields(formItemLayout)}
            <FormItem {...tailFormItemLayout}>
              <Button type="primary" htmlType="submit">
                Register
              </Button>
            </FormItem>
          </Form>
        </Card>
      </div>
    );
  }

  private renderFields = formItemLayout => {
    const { getFieldDecorator } = this.props.form;
    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: '45'
    })(
      <Select style={{ width: 70 }}>
        <Option value="45">+45</Option>
        <Option value="47">+47</Option>
      </Select>
    );
    const fieldsData = [
      {
        inputProps: {
          type: 'email'
        },
        label: 'E-mail',
        name: 'email',
        validation: [
          {
            message: 'The input is not valid e-mail!',
            type: 'email'
          },
          { required: true, message: 'Please input your e-mail!' }
        ]
      },
      {
        inputProps: {
          type: 'password'
        },
        label: 'Password',
        name: 'password',
        validation: [
          { required: true, message: 'Please input your Password!' },
          {
            validator: this.validatePassword
          }
        ]
      },
      {
        inputProps: {
          type: 'password'
        },
        label: 'Confirm Password',
        name: 'confirm',
        validation: [
          { required: true, message: 'Please confirm your Password!' },
          {
            validator: this.validatePassword
          }
        ]
      },
      {
        inputProps: {
          type: 'text'
        },
        label: 'Full name',
        name: 'name',
        validation: [
          { required: true, message: 'Please input your full name!' }
        ]
      },
      {
        inputProps: {
          type: 'text'
        },
        label: 'CPR',
        name: 'cpr',

        validation: [
          { required: true, message: 'Please enter your CPR!' },
          {
            validator: this.validatePassword
          }
        ]
      },
      {
        inputProps: {
          type: 'text'
        },
        label: 'Address',
        name: 'address',

        validation: [
          { required: true, message: 'Please input your Address!' },
          {
            validator: this.validatePassword
          }
        ]
      },
      {
        label: 'Phone number',
        name: 'phone',

        inputProps: {
          addonBefore: prefixSelector,
          type: 'text'
        },
        validation: [
          { required: true, message: 'Please input your Phone Number!' },
          {
            validator: this.validatePassword
          }
        ]
      }
    ];

    return fieldsData.map(item => (
      <FormItem {...formItemLayout} label={item.label}>
        {getFieldDecorator(item.name, {
          rules: item.validation
        })(<Input {...item.inputProps} />)}
      </FormItem>
    ));
  };

  private handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      } else {
        this.showSuccessMessage();
      }
    });
  };

  private showSuccessMessage = () => {
    message.success('Processing complete!');
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

const WrappedRegister = Form.create()(Register);

export default WrappedRegister;
