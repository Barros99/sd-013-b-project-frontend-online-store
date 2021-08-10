import React from 'react';
import { BrowserRouter, Switch, Link, Route } from 'react-router-dom';

import { Home, Cart } from './pages';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/cart" data-testid="shopping-cart-button"> Carrinho </Link>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/cart" component={ Cart } />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
