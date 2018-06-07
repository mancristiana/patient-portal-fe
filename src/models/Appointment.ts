import { Doctor } from './';
export class Appointment {
  public id: string;
  public description: string;
  public doctor: Doctor;
  public duration: number;
  public time: string;
}
