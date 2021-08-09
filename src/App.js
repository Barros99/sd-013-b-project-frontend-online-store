import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import SearchBar from './SearchBar';
import ShoppingCart from './ShoppingCart';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ SearchBar } />
          <Route exact path="/shoppingcart" component={ ShoppingCart } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
