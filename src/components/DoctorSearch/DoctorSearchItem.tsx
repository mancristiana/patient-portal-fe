import { Button, Card } from 'antd';
import * as React from 'react';
import { Doctor } from './../../models';
import Profile from './../Profile/Profile';

interface IDoctorSearchItemProps {
  doctor: Doctor;
  onSelect?: (doctor: Doctor) => void;
  loading?: boolean;
}
const DoctorSearchItem: React.SFC<IDoctorSearchItemProps> = ({
  doctor,
  onSelect,
  loading = false
}) => {
  const description = loading
    ? ''
    : doctor.speciality.name + ' @ ' + doctor.clinic;
  const color = loading ? '#fefefe' : null;
  const handleClick = event => {
    if (onSelect) {
      onSelect(doctor);
    }
  };
  const extra = onSelect ? (
    <Button
      style={{ margin: 8 }}
      shape="circle"
      size="large"
      icon="calendar"
      onClick={handleClick}
    />
  ) : null;
  return (
    <Card
      loading={loading}
      className="Search-item"
      extra={extra}
      bordered={false}
      title={
        <Profile
          name={doctor.name}
          description={description}
          color={color || undefined}
        />
      }>
      <p className="Doctor-contact">
        <span>{doctor.address}</span>
        <span>{doctor.phone}</span>
      </p>
    </Card>
  );
};
export default DoctorSearchItem;
