import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Cart from './Components/Cart';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route path="/cart" component={ Cart } />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
