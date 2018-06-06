import request from 'axios';
import { Register, Response } from './../models';

const API = 'https://patient-portal-be.herokuapp.com/api/users';
export class UsersApi {
  public static get(id) {
    return request.get(API + '/patients' + '/' + id);
  }

  public static getAll(callback) {
    return request.get(API + '/patients');
  }

  public static register(data: Register): Promise<Response<any>> {
    return request
      .post(API, data)
      .then(response => {
        return response.data;
      })
      .catch(err => err.response.data);
  }
}
