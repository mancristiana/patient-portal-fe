import { Icon, Layout } from 'antd';
import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.less';
import Navigation from './components/Navigation';
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
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
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
