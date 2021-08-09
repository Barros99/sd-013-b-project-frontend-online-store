import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import ShoppingCart from './components/ShoppingCart';
import ProductList from './components/ProductList';
import Categories from './components/Categories';

function App() {
  return (
    <div>
      <Router>
        <Link to="/shopping-cart" data-testid="shopping-cart-button">carrinho</Link>
        <Link to="/categories">Category</Link>
        <Switch>
          <Route exact path="/" render={ () => <ProductList /> } />
          <Route path="/shopping-cart" render={ () => <ShoppingCart /> } />
          <Route path="/categories" render={ () => <Categories /> } />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
