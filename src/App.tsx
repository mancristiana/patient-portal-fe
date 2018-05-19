import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.less';
import Navigation from './components/Navigation';
import { Register } from './views';

class App extends React.Component {
  public render() {
    return (
      <Router>
        <div className="App">
          <Navigation />
          <Route path="/register" component={Register} />
        </div>
      </Router>
    );
  }
}

export default App;
