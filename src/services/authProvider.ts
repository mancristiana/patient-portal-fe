// import request from 'axios';
// import * as React from 'react';
// import { Auth, Response, Token } from './../shared';

// import { CookieService } from './cookie';

// interface IAuthContext {
//   isLoggedIn: boolean;
//   login?: function(Auth): Promise<Response<Token>>;
//   logout?: function();
// }

// interface IAuthProviderState {
//   isLoggedIn: boolean;
// }

// const API = 'https://patient-portal-be.herokuapp.com/auth';

// const AuthContext = React.createContext<IAuthContext>({ isLoggedIn: false });

// class AuthProvider extends React.Component<object, IAuthProviderState> {

// //  AuthContext = React.createContext<IAuthContext>({ isLoggedIn: false });
//  // AuthConsumer = this.AuthContext.Consumer;

//   constructor(props) {
//     super(props);
//     this.state = {
//       isLoggedIn: false
//     }

//     this.login = this.login.bind(this);
//     this.logout = this.logout.bind(this);
//     this.storeToken = this.storeToken.bind(this);

//   }

//   public login(data: Auth): Promise<Response<Token>> {
//     return request
//       .post(API, data)
//       .then(response => {
//         const token: Token = response.data.data;
//         this.setState({ isLoggedIn: true });
//         this.storeToken(token);
//         return response.data;
//       })
//       .catch(err => err.response.data);
//   }

//   public storeToken(token: Token) {
//     CookieService.setToken(token.jwt);
//   }

//   public logout() {
//     this.setState({ isLoggedIn: false });
//     CookieService.removeToken();
//   }

//   public render() {
//     return (
//       AuthContext
//       /*/
//       this.AuthContext.Provider
//       <IAuthContext.Provider > </IAuthContext>
//       <AuthContext.Provider value={{
//         isLoggedIn: this.state.isLoggedIn,
//         login: this.login,
//         logout: this.logout
//       }}>
//       {this.props.children}
//     </AuthContext.Provider>
//     */
//     );
//   }

// }

// export { AuthProvider, AuthConsumer };
