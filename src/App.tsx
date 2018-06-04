import { Icon, Layout } from 'antd';
import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.less';
import { GuestRoute, Navigation } from './components';
import { AuthProvider } from './services/auth/index';
import { Home, Login, Register } from './views';

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
              <Route exact={true} path="/" component={Home} />
              <GuestRoute path="/login" component={Login} />
              <GuestRoute path="/register" component={Register} />
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
