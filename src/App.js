import React from 'react';
import './App.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ShoppingCart from './components/ShoppingCart';
import CartButton from './components/CartButton';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ CartButton } />
          <Route exact path="/shoppingcart" component={ ShoppingCart } />
        </Switch>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </BrowserRouter>
    </div>
  );
}

export default App;
