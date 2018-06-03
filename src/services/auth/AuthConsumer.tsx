import * as React from 'react';

import { Consumer, IAuthContext } from './AuthContext';

export interface IAuthConsumerProps {
  children: (props: IAuthContext) => any;
}
export class AuthConsumer extends React.Component<IAuthConsumerProps, object> {
  public render() {
    return <Consumer>{props => this.props.children({ ...props })}</Consumer>;
  }
}
