import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={ Home } />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
