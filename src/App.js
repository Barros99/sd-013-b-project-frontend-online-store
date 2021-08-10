import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import * as api from './services/api';
import './App.css';
import ShoppingCart from './pages/ShoppingCart';

function App() {
  api.getCategories().then((data) => console.log(data));
  // api.getProductsFromCategoryAndQuery().then((data) => console.log(data.results));
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/shopping-cart" component={ ShoppingCart } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
