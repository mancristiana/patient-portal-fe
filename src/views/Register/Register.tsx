import { Button, message, Steps } from 'antd';
import * as React from 'react';
import './Register.less';

const Step = Steps.Step;
const steps = [
  {
    content: 'First-content',
    title: 'First'
  },
  {
    content: 'Second-content',
    title: 'Second'
  },
  {
    content: 'Last-content',
    title: 'Last'
  }
];

export interface State {
  current: number;
}

class Register extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      current: 0
    };
  }

  public render() {
    const { current } = this.state;
    return (
      <div className="Register">
        <Steps current={current}>
          {steps.map(item => <Step key={item.title} title={item.title} />)}
        </Steps>
        <div className="steps-content">{steps[this.state.current].content}</div>
        <div className="steps-action">
          {this.state.current < steps.length - 1 && (
            <Button type="primary" onClick={this.next}>
              Next
            </Button>
          )}
          {this.state.current === steps.length - 1 && (
            <Button type="primary" onClick={this.showSuccessMessage}>
              Done
            </Button>
          )}
          {this.state.current > 0 && (
            <Button style={{ marginLeft: 8 }} onClick={this.prev}>
              Previous
            </Button>
          )}
        </div>
      </div>
    );
  }

  private next = () => {
    const current = this.state.current + 1;
    this.setState({ current });
  };

  private prev = () => {
    const current = this.state.current - 1;
    this.setState({ current });
  };

  private showSuccessMessage = () => {
    message.success('Processing complete!');
  };
}

export default Register;
