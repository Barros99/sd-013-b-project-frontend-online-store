import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import * as api from './services/api';
import Home from './components/initial/Home';
import ShoppingCart from './components/initial/ShoppingCart';
import ProductDetails from './components/initial/ProductDetails';

api.getCategories();

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/product" component={ ProductDetails } />
        <Route exact path="/shop" component={ ShoppingCart } />
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
