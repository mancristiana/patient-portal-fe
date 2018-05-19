import Button from 'antd/lib/button';
import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Hello from './components/Hello';
import Navigation from './components/Navigation';

import logo from './logo.svg';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Button type="primary">Button</Button>

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
