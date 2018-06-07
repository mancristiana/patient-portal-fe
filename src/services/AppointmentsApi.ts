import request from 'axios';
import { AuthService } from './';
import { Appointment, AppointmentDataSource, Response } from './../models';

const apiUrl = 'https://patient-portal-be.herokuapp.com/api/appointments';
export class AppointmentsApi {
  public static getAll(): Promise<Response<Appointment[]>> {
    const config = {
      headers: AuthService.getAuthHeader()
    };
    return request
      .get(apiUrl, config)
      .then(response => {
        return response.data;
      })
      .catch(err => err.response.data);
  }

  public static mapAppointmentsToDataSource(
    appointments: Appointment[]
  ): AppointmentDataSource[] {
    return appointments.map(appointment => ({
      clinic: appointment.doctor.clinic,
      description: appointment.description,
      doctor: appointment.doctor,
      duration: appointment.duration,
      key: appointment.id,
      location: appointment.doctor.address,
      time: appointment.time
    }));
  }
}
