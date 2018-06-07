import { Icon, Layout } from 'antd';
import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.less';
import { GuestRoute, Navigation, PrivateRoute } from './components';
import { AuthProvider } from './services';
import {
  AppointmentView,
  DoctorView,
  LoginView,
  // PatientView,
  RegisterView,
  SearchView
} from './views';

const { Header, Content, Footer } = Layout;

class App extends React.Component {
  public render() {
    return (
      <AuthProvider>
        <Router>
          <Layout className="App">
            <div className="App-background" />
            <Header className="App-header">
              <Navigation />
            </Header>

            <Content className="App-content">
              <Route exact={true} path="/" component={SearchView} />
              <Route path="/doctors/:doctorId" component={DoctorView} />
              <GuestRoute path="/login" component={LoginView} />
              <GuestRoute path="/register" component={RegisterView} />
              <PrivateRoute path="/appointments" component={AppointmentView} />
              <PrivateRoute path="/patient" component={AppointmentView} />
            </Content>

            <Footer className="App-footer">
              Made with
              <span className="heart">
                <Icon type="heart" />
              </span>
              by Cristiana Man
            </Footer>
          </Layout>
        </Router>
      </AuthProvider>
    );
  }
}

export default App;
