import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import ShoppingCart from './components/ShoppingCart';
import ProductList from './components/ProductList';

function App() {
  return (
    <div>
      <Router>
        <Link to="/shopping-cart" data-testid="shopping-cart-button">carrinho</Link>
        <Switch>
          <Route exact path="/" render={ () => <ProductList /> } />
          <Route path="/shopping-cart" render={ () => <ShoppingCart /> } />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
