import { Button, Rate } from 'antd';
import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.less';
import Hello from './components/Hello';
import Navigation from './components/Navigation';

import logo from './logo.svg';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Button type="primary">Button</Button>
        <Rate character="6" />
        <Router>
          <div className="App-intro">
            <Navigation />
            <Route path="/hello" render={this.renderHello} />
          </div>
        </Router>
      </div>
    );
  }
  private renderHello() {
    return <Hello name="Cristiana" />;
  }
}

export default App;
