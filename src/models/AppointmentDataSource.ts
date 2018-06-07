import { Doctor } from './';
export class AppointmentDataSource {
  public key: string;
  public time: string;
  public description: string;
  public doctor: Doctor;
  public clinic: string;
  public location: string;
  public duration: number;
}
