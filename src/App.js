import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import ShoppingCart from './components/ShoppingCart';
import Home from './components/Home';
import Categories from './components/Categories';
import ProductDetails from './components/ProductDetails';

function App() {
  return (
    <div>
      <Router>
        <Link to="/shopping-cart" data-testid="shopping-cart-button">
          carrinho
        </Link>
        <Link to="/categories">Category</Link>
        <Switch>
          <Route exact path="/" render={ () => <Home /> } />
          <Route path="/shopping-cart" render={ () => <ShoppingCart /> } />
          <Route path="/categories" render={ () => <Categories /> } />
          <Route
            path="/product-details/:id"
            render={ (props) => <ProductDetails { ...props } /> }
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
