import { Col, Input, message, Row } from 'antd';
import * as React from 'react';
import { DoctorSearchNotFound, DoctorSearchResults } from './../../components';
import { Doctor, Response } from './../../models';
import { DoctorsApi } from './../../services';
import './Home.less';

const { Search } = Input;

interface IHomeState {
  doctors: Doctor[];
  error: boolean;
  query: string;
}

class Home extends React.Component<object, IHomeState> {
  constructor(props) {
    super(props);
    this.state = {
      doctors: [],
      error: false,
      query: ''
    };
  }

  public render() {
    const responsiveSearch = {
      lg: { offset: 5, span: 14 },
      md: { offset: 4, span: 16 },
      sm: { offset: 3, span: 18 },
      xl: { offset: 6, span: 12 },
      xs: { offset: 1, span: 22 }
    };

    return (
      <div className="Home">
        <Row>
          <Col {...responsiveSearch}>
            <h1 className="Search-header">
              <span>Need medical care?</span> <span>Find a doctor.</span>
            </h1>

            <Search
              className="Search-bar"
              placeholder="Search doctor name, speciality, clinic, address..."
              size="large"
              onSearch={this.onSearchChange}
            />

            {this.state.error && (
              <DoctorSearchNotFound query={this.state.query} />
            )}

            <DoctorSearchResults
              doctors={this.state.doctors}
              onSelect={this.onDoctorSelect}
            />
          </Col>
        </Row>
      </div>
    );
  }

  private onSearchChange = query => {
    const hide = message.loading('Finding doctors', 0);
    DoctorsApi.search(query).then((response: Response<Doctor[]>) => {
      setTimeout(hide, 0);
      if (response.success) {
        this.setState({
          doctors: response.data || [],
          error: false,
          query
        });
      } else {
        this.setState({
          doctors: [],
          error: true,
          query
        });
      }
    });
  };

  private onDoctorSelect = (doctor: Doctor) => {
    console.log('DOCTOR', doctor);
  };
}

export default Home;
