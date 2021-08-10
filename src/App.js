import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Categories from './Components/Categories';
import ProductList from './Components/ProductList';
import Cart from './pages/Cart';

import Header from './Components/Header';
import Body from './Components/Body';

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" />
          <Route exact path="/carrinho" component={ Cart } />
        </Switch>

        <Header />
        <Body />
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
