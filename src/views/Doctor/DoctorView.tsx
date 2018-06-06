import { Col, Row } from 'antd';
import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
// import {
//   DoctorSearchItem,
//   DoctorNotFound
// } from './../../components';
import { DoctorSearchItem as DoctorCard } from './../../components';
import { Doctor, Response } from './../../models';
import { DoctorsApi } from './../../services';
import './Doctor.less';
interface IDoctorViewState {
  doctor: Doctor;
  error: boolean;
  loading: boolean;
}

class DoctorView extends React.Component<
  RouteComponentProps<{ doctorId: string }>,
  IDoctorViewState
> {
  constructor(props) {
    super(props);
    this.state = {
      doctor: new Doctor(),
      error: false,
      loading: true
    };
  }

  public componentDidMount() {
    const { match } = this.props;
    const id = match.params.doctorId || '';
    this.getDoctor(id);
  }

  public render() {
    const responsiveContainer = {
      lg: { offset: 5, span: 14 },
      md: { offset: 3, span: 18 },
      //   sm: { offset: 2, span: 20 },
      xl: { offset: 6, span: 12 },
      xs: { offset: 1, span: 22 }
    };

    return (
      <div className="Doctor">
        <Row>
          <Col {...responsiveContainer}>
            {this.state.doctor && (
              <DoctorCard
                doctor={this.state.doctor}
                loading={this.state.loading}
              />
            )}
          </Col>
        </Row>
      </div>
    );
  }

  private getDoctor = id => {
    DoctorsApi.getDoctorById(id).then((response: Response<Doctor>) => {
      if (response.success) {
        this.setState({
          doctor: response.data || new Doctor(),
          error: false,
          loading: false
        });
      } else {
        this.setState({
          error: true,
          loading: false
        });
      }
    });
  };
}

export default withRouter(DoctorView);
