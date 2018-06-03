import docCookies from 'doc-cookies';

export class CookieService {
  public static setToken(value: string): void {
    const hour = 60 * 60 * 1000; // in ms
    const expiration = new Date().getTime() + hour;
    docCookies.setItem('jwt', value, expiration);
  }

  public static getToken(): string {
    return docCookies.getItem('jwt');
  }

  public static removeToken() {
    return docCookies.removeItem('jwt');
  }
}
