import { Button, Col, Divider, Row, Table } from 'antd';
import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { DoctorSearchNotFound as NotFound, Profile } from './../../components';
import { Appointment, AppointmentDataSource, Response } from './../../models';
import { AppointmentsApi } from './../../services';
import './Appointment.less';

interface IAppointmentViewState {
  appointments: AppointmentDataSource[];
  error: boolean;
  isUnauthorized: boolean;
}

class AppointmentView extends React.Component<
  RouteComponentProps<{ doctorId: string }>,
  IAppointmentViewState
> {
  constructor(props) {
    super(props);
    this.state = {
      appointments: [],
      error: false,
      isUnauthorized: false
    };
  }
  public componentDidMount() {
    AppointmentsApi.getAll().then((response: Response<Appointment[]>) => {
      if (response.success) {
        const appointmentsData = response.data || [];
        this.setState({
          appointments: AppointmentsApi.mapAppointmentsToDataSource(
            appointmentsData
          ),
          error: appointmentsData.length === 0,
          isUnauthorized: false
        });
      } else {
        const errorMessage = response.error || '';
        if (errorMessage.includes('Unauthorized')) {
          this.setState({ isUnauthorized: true });
        }
      }
    });
  }

  public render() {
    const responsiveContainer = {
      // lg: { offset: 5, span: 14 },
      // md: { offset: 3, span: 18 },
      // xl: { offset: 6, span: 12 },
      xs: { offset: 1, span: 22 }
    };

    const columns = [
      {
        dataIndex: 'doctor',
        key: 'doctor',
        render: doctor => (
          <Profile name={doctor.name} description={doctor.speciality.name} />
        ),
        title: 'Doctor',
        width: 300
      },
      {
        dataIndex: 'time',
        key: 'time',
        title: 'Time',
        width: 150
      },
      {
        dataIndex: 'location',
        key: 'location',
        title: 'Address'
      },

      {
        dataIndex: 'description',
        key: 'description',
        title: 'Symptoms'
      },
      {
        key: 'action',
        render: (text, record) => (
          <span>
            <Button type="primary" shape="circle" icon="edit" />
            <Divider type="vertical" />
            <Button type="danger" shape="circle" icon="delete" />
          </span>
        ),
        title: 'Action',
        width: 114
      }
    ];

    return (
      <div className="Appointment">
        <Row>
          <Col {...responsiveContainer}>
            <h1>Appointments</h1>
            {this.renderNotFound()}
            {!this.state.error && (
              <Table
                columns={columns}
                dataSource={this.state.appointments}
                bordered={true}
                pagination={{ position: 'both', size: 'small' }}
              />
            )}
          </Col>
        </Row>
      </div>
    );
  }

  private renderNotFound = () => {
    return this.state.error ? (
      <NotFound
        title="No appointments found"
        content={
          <React.Fragment>
            <p>
              It seems you have no appointments. To book an appointment with
              please start by searching for doctor!
            </p>
            <Button type="primary" onClick={this.goToSearch}>
              Search
            </Button>
          </React.Fragment>
        }
      />
    ) : null;
  };
  private goToSearch = event => {
    const { history } = this.props;
    history.push('/');
  };
}

export default withRouter(AppointmentView);
