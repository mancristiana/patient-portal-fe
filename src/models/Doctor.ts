import { Speciality } from './';
export class Doctor {
  public id: string;
  public name: string;
  public speciality: Speciality;
  public clinic: string;
  public address: string;
  public phone: string;

  constructor() {
    this.id = '';
    this.name = '';
    this.speciality = {
      id: '',
      name: ''
    };
    this.clinic = '';
    this.address = '';
    this.phone = '';
  }
}
