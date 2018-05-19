import { Icon, Layout } from 'antd';
import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.less';
import Navigation from './components/Navigation';
import { Home, Register } from './views';

const { Header, Content, Footer } = Layout;

class App extends React.Component {
  public render() {
    return (
      <Router>
        <Layout className="App">
          <Header className="App-header">
            <Navigation />
          </Header>

          <Content className="App-content">
            <div className="App-view">
              <Route exact={true} path="/" component={Home} />
              <Route path="/register" component={Register} />
            </div>
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
    );
  }
}

export default App;
