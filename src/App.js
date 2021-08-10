import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import CartButton from './Components/CartButton';
import SearchBar from './Components/SearchBar';
import ShoppingCart from './Pages/ShoppingCart';

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <header>
            <SearchBar />
            <CartButton />
          </header>
          <Route exact path="/shoppingcart" component={ ShoppingCart } />
        </BrowserRouter>
      </div>
    );
  }
}
