import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import './App.css';
import Categories from './Components/Categories';
import ProductList from './Components/ProductList';
import Cart from './pages/Cart';

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" />
          <Route exact path="/carrinho" component={ Cart } />
        </Switch>
        <ProductList />
        <Categories />
        <Link
          to="/carrinho"
          data-testid="shopping-cart-button"
        >
          Carrinho
        </Link>
      </BrowserRouter>
    );
  }
}
