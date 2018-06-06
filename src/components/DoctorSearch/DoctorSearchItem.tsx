import { Button, Card } from 'antd';
import * as React from 'react';
import { Doctor } from './../../models';
import Profile from './../Profile/Profile';

interface IDoctorSearchItemProps {
  doctor: Doctor;
}
const DoctorSearchItem: React.SFC<IDoctorSearchItemProps> = ({ doctor }) => {
  const description = doctor.speciality.name + ' @ ' + doctor.clinic;
  return (
    <Card
      className="Search-item"
      extra={
        <Button
          style={{ margin: 8 }}
          shape="circle"
          size="large"
          icon={'calendar'}
        />
      }
      bordered={false}
      title={<Profile name={doctor.name} description={description} />}>
      <p className="Doctor-contact">
        <span>{doctor.address}</span>
        <span>{doctor.phone}</span>
      </p>
    </Card>
  );
};
export default DoctorSearchItem;
