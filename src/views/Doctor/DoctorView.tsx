import { Button, Col, Row } from 'antd';
import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
// import {
//   DoctorSearchItem,
//   DoctorNotFound
// } from './../../components';
import {
  DoctorSearchItem as DoctorCard,
  DoctorSearchNotFound as NotFound,
  Timeslots
} from './../../components';
import { DayTimeslot, Doctor, Response, Timeslot } from './../../models';
import { DoctorsApi, TimeslotService } from './../../services';
import './Doctor.less';
interface IDoctorViewState {
  doctor: Doctor;
  error: boolean;
  loading: boolean;
  timeslots: DayTimeslot[];
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
      loading: true,
      timeslots: []
    };
  }

  public componentDidMount() {
    const { match } = this.props;
    const id = match.params.doctorId || '';
    this.getDoctor(id);
    this.getTimeslots(id);
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
            {this.renderNotFound()}
            {!this.state.error && (
              <DoctorCard
                doctor={this.state.doctor}
                loading={this.state.loading}
              />
            )}
          </Col>
        </Row>
        <Row>
          {!this.state.error && <Timeslots days={this.state.timeslots} />}
        </Row>
      </div>
    );
  }

  private renderNotFound = () => {
    return this.state.error ? (
      <NotFound
        title="Doctor not found"
        content={
          <React.Fragment>
            <p>
              There was a problem with fetching your request. Please try again
              shortly.
            </p>
            <Button type="primary" onClick={this.goToSearch}>
              Go Back
            </Button>
          </React.Fragment>
        }
      />
    ) : null;
  };

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

  private getTimeslots = id => {
    DoctorsApi.getDoctorTimeslots(id).then((response: Response<Timeslot[]>) => {
      if (response.success) {
        const timeslots = TimeslotService.mapTimeslotsToDays(
          response.data || []
        );
        this.setState({
          timeslots
        });
      }
    });
  };

  private goToSearch = event => {
    const { history } = this.props;
    history.goBack();
  };
}

export default withRouter(DoctorView);
