import { Col, Input, message, Row } from 'antd';
import * as React from 'react';
import {
  DoctorSearchFilterList,
  DoctorSearchNotFound,
  DoctorSearchResults
} from './../../components';
import { Doctor, Response } from './../../models';
import { DoctorsApi } from './../../services';
import './Search.less';

const { Search: SearchBar } = Input;

interface ISearchState {
  doctors: Doctor[];
  error: boolean;
  isPristine: boolean;
  query: string;
}

class Search extends React.Component<object, ISearchState> {
  constructor(props) {
    super(props);
    this.state = {
      doctors: [],
      error: false,
      isPristine: true,
      query: ''
    };
  }

  public render() {
    const responsiveSearch = {
      lg: { offset: 5, span: 14 },
      md: { offset: 3, span: 18 },
      //   sm: { offset: 2, span: 20 },
      xl: { offset: 6, span: 12 },
      xs: { offset: 1, span: 22 }
    };

    return (
      <div className="Search">
        <Row>
          <Col {...responsiveSearch}>
            <h1 className="Search-header">
              <span>Need medical care?</span> <span>Find a doctor.</span>
            </h1>

            <SearchBar
              className="Search-bar"
              placeholder="Search doctor name, speciality, clinic, address..."
              size="large"
              onSearch={this.onSearchChange}
            />
          </Col>
        </Row>
        {!this.state.isPristine && (
          <Row className="Search-results">
            <Col {...responsiveSearch}>
              {this.state.error && (
                <DoctorSearchNotFound query={this.state.query} />
              )}

              <DoctorSearchResults
                doctors={this.state.doctors}
                onSelect={this.onDoctorSelect}
              />
            </Col>
          </Row>
        )}
        <Row className="Search-by">
          <Col {...responsiveSearch}>
            <h2>Search by...</h2>
            <DoctorSearchFilterList
              title="Cities"
              list={DoctorsApi.getCityFilters()}
              onSelect={this.onSearchChange}
            />
            <DoctorSearchFilterList
              title="Specialities"
              list={DoctorsApi.getSpecialityFilters()}
              onSelect={this.onSearchChange}
            />{' '}
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
          isPristine: false,
          query
        });
      } else {
        this.setState({
          doctors: [],
          error: true,
          isPristine: false,
          query
        });
      }
    });
  };

  private onDoctorSelect = (doctor: Doctor) => {
    console.log('DOCTOR', doctor);
  };
}

export default Search;
