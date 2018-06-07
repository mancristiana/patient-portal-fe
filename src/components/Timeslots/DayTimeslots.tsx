import { Button } from 'antd';
import * as React from 'react';
import { DayTimeslot } from './../../models';

import './Timeslots.less';

interface IDayTimeslotsProps {
  day: DayTimeslot;
}
const DayTimeslots: React.SFC<IDayTimeslotsProps> = ({ day }) => {
  return (
    <div className="DayTimeslots">
      <h2>{day.name}</h2>
      <p>{day.date}</p>
      {day.timeslots.map((timeslot, key) => (
        <div className="DayTimeslots-time" key={key}>
          <Button type="primary">{timeslot.time.slice(11)}</Button>
        </div>
      ))}
    </div>
  );
};
export default DayTimeslots;
