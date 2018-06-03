import * as React from 'react';

import { defaultState, IAuthContext, Provider } from './AuthContext';

export interface IAuthProviderProps {
  children: React.ReactNode;
}

// export interface IAuthProviderState extends IAuthContext {}

export class AuthProvider extends React.Component<
  IAuthProviderProps,
  IAuthContext
> {
  constructor(props) {
    super(props);
    this.state = { ...defaultState };
  }

  public render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}
