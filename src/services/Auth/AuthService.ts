import request from 'axios';
import { Auth, Response, Token } from './../../models';
import { CookieService } from './CookieService';

const API = 'https://patient-portal-be.herokuapp.com/auth';
export class AuthService {
  public static login(data: Auth): Promise<Response<Token>> {
    return request
      .post(API, data)
      .then(response => {
        const token: Token = response.data.data;
        this.storeToken(token);
        return response.data;
      })
      .catch(err => err.response.data);
  }

  public static isLoggedIn(): boolean {
    const token = CookieService.getToken();
    return !!token;
  }

  public static logout() {
    CookieService.removeToken();
  }

  public static storeToken(token: Token) {
    CookieService.setToken(token.jwt);
  }
}

// Git force rename
