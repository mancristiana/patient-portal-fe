import request from 'axios';
import { Doctor, Response, Timeslot } from './../models';

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
  public static getDoctorById(id: string): Promise<Response<Doctor>> {
    const encodedId = encodeURIComponent(id);
    return request
      .get(`${apiUrl}/${encodedId}`)
      .then(response => {
        return response.data;
      })
      .catch(err => err.response.data);
  }

  public static getDoctorTimeslots(
    doctorId: string
  ): Promise<Response<Timeslot[]>> {
    const encodedId = encodeURIComponent(doctorId);
    return request
      .get(`${apiUrl}/${encodedId}/timeslots`)
      .then(response => {
        return response.data;
      })
      .catch(err => err.response.data);
  }

  public static getCityFilters(): string[] {
    return [
      'Oslo',
      'Bergen',
      'Trondheim',
      'Tromsø',
      'Stavanger',
      'Ålesund',
      'Kristianssand',
      'Drammen',
      'Frederikstad',
      'Lillehammer',
      'Bodø'
    ];
  }

  public static getSpecialityFilters(): string[] {
    return [
      'Acupuncturists',
      'Allergists',
      'Audiologists',
      'Cardiologists',
      'Chiropractors',
      'Dentists',
      'Dermatologists',
      'Dietitians',
      'Ear, Nose & Throat Doctors',
      'Emergency Medicine Physicians',
      'Endocrinologists',
      'Endodontists',
      'Eye Doctors',
      'Family Physicians',
      'Gastroenterologists',
      'Hand Surgeons',
      'Hearing Specialists',
      'Hematologists',
      'Infectious Disease Specialists',
      'Infertility Specialists',
      'Internists',
      'Naturopathic Doctors',
      'Nephrologists',
      'Neurologists',
      'Neurosurgeons',
      'Nurse Practitioners',
      'Nutritionists',
      'OB-GYNs',
      'Oncologists',
      'Ophthalmologists',
      'Optometrists',
      'Oral Surgeons',
      'Orthodontists',
      'Orthopedic Surgeons',
      'Pain Management Specialists',
      'Pediatric Dentists',
      'Pediatric Urgent Care Specialists',
      'Pediatricians',
      'Periodontists',
      'Physiatrists',
      'Physical Therapists',
      'Plastic Surgeons',
      'Podiatrists',
      'Doctors',
      'Prosthodontists',
      'Psychiatrists',
      'Psychologists',
      'Psychotherapists',
      'Pulmonologists',
      'Radiologists',
      'Rheumatologists',
      'Sleep Medicine Specialists',
      'Sports Medicine Specialists',
      'Surgeons',
      'Therapists / Counselors',
      'Travel Medicine Specialists',
      'Urgent Care Specialists',
      'Urologists'
    ];
  }
}
