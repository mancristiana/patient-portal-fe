import request from 'axios';

const API = 'https://patient-portal-be.herokuapp.com/api/users';
export class UsersApi {
  public static get(id) {
    return request.get(API + '/patients' + '/' + id);
  }

  public static getAll(callback) {
    return request.get(API + '/patients');
  }
}
