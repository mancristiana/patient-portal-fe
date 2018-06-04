// import * as React from 'react';
// import { Auth } from './../../shared';
// import { defaultState, IAuthContext, Provider } from './AuthContext';

// export interface IAuthProviderProps {
//   children: React.ReactNode;
// }

// export class AuthProvider extends React.Component<
//   IAuthProviderProps,
//   IAuthContext
// > {
//   constructor(props) {
//     super(props);
//     this.state = {
//       ...defaultState,
//       login: this.login,
//       logout: () => this.logout
//     };
//   }

//   public login = (user: Auth) => {
//     console.log('LOGIN WAS CALLED');
//   };

//   public logout() {
//     console.log('LOGOUT WAS CALLED');
//   }

//   public render() {
//     return <Provider value={this.state}>{this.props.children}</Provider>;
//   }
// }
