import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import ShoppingCart from './components/ShoppingCart';
import SearchBar from './components/SearchBar';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={ () => (<SearchBar />) }
          />
          <Route
            exact
            path="/shoppingCart"
            component={ ShoppingCart }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
