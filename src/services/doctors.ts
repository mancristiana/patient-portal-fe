import request from 'axios';
import { Doctor, Response } from './../shared';

const apiUrl = 'https://patient-portal-be.herokuapp.com/api/doctors';
export class DoctorsApi {
  public static search(query: string): Promise<Response<Doctor[]>> {
    const queryUrl = encodeURIComponent(query);
    const url = query ? `${apiUrl}?query=${queryUrl}` : apiUrl;
    return request
      .get(url)
      .then(response => {
        return response.data;
      })
      .catch(err => err.response.data);
  }
}
