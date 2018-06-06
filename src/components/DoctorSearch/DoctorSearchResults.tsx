import { Col, Row } from 'antd';
import * as React from 'react';
import { Doctor } from './../../models';
import './DoctorSearch.less';
import DoctorSearchItem from './DoctorSearchItem';

interface IDoctorSearchResultsProps {
  doctors: Doctor[];
}
const DoctorSearchResults: React.SFC<IDoctorSearchResultsProps> = ({
  doctors
}) => {
  const responsiveCard = {
    md: 12,
    sm: 24
  };

  return (
    <div className="Search-results">
      <Row gutter={48} style={{ margin: 0 }}>
        {doctors.map((doctor, key) => (
          <Col key={key} {...responsiveCard}>
            <DoctorSearchItem doctor={doctor} />
          </Col>
        ))}
      </Row>
    </div>
  );
};
export default DoctorSearchResults;
