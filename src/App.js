import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';
import ProductList from './pages/ProductList';
import ShoppingCart from './pages/ShoppingCart';

function App() {
  return (
    <BrowserRouter>
      <main>
        <Switch>
          <Route exact path="/" component={ ProductList } />
          <Route exact path="/shopping-cart" component={ ShoppingCart } />
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
