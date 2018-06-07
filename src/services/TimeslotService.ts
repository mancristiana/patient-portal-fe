import moment from 'moment';
import { DayTimeslot, Timeslot } from './../models';

export class TimeslotService {
  public static mapTimeslotsToDays(timeslots: Timeslot[]): DayTimeslot[] {
    if (timeslots.length === 0) {
      return [];
    }

    const dayTimeslots: DayTimeslot[] = [];
    for (const timeslot of timeslots) {
      const timeslotDate = timeslot.time.slice(0, 10);
      const date = moment(timeslotDate, 'DD-MM-YYYY');
      const formatted = date.format('DD-MM-YYYY');

      const dayIndex = dayTimeslots.findIndex(item => item.date === formatted);

      if (dayIndex === -1) {
        dayTimeslots.push({
          date: formatted,
          name: date.format('dddd'),
          timeslots: [timeslot]
        });
      } else {
        dayTimeslots[dayIndex].timeslots.push(timeslot);
      }
    }

    return dayTimeslots;
  }
}
