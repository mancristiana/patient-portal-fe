import { Button, Card, Col, Icon, Input, Row } from 'antd';
import * as React from 'react';
import { Profile } from './../../components';
import './Home.less';

const { Search } = Input;

class Home extends React.PureComponent {
  public render() {
    const responsiveSearch = {
      lg: { offset: 5, span: 14 },
      md: { offset: 4, span: 16 },
      sm: { offset: 3, span: 18 },
      xl: { offset: 6, span: 12 },
      xs: { offset: 1, span: 22 }
    };
    const responsiveCard = {
      md: 12,
      sm: 24
    };

    return (
      <div className="Home">
        <Icon type="calendar" />
        <Row>
          <Col {...responsiveSearch}>
            <h1 className="Search-header">
              <span>Need medical care?</span> <span>Find a doctor.</span>
            </h1>

            <Search
              placeholder="Try dentist..."
              size="large"
              onSearch={value => console.log(value)}
            />

            <div className="Search-results">
              <Row gutter={48}>
                {[1, 2, 3, 4, 5, 6, 7, 8].map(item => (
                  <Col key={item} {...responsiveCard}>
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
                      title={
                        <Profile
                          name={'John Doe' + item}
                          description="Dentist @ clinic name"
                        />
                      }>
                      <p className="Doctor-contact">
                        <span>Address 235, 2700 Kobenhavn</span>
                        <span>49 89 51 78</span>
                      </p>
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Home;
