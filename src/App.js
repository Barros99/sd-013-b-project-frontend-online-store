import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ShoppingCart from './components/ShoppingCart';
import Home from './components/Home';
import ProductDetails from './components/ProductDetails';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      cartItems: [],
    };
  }

  addToCart = (item) => {
    this.setState((prevState) => ({ cartItems: [...prevState.cartItems, item] }));
  }

  render() {
    const { cartItems } = this.state;
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/"
              render={ (props) => (<Home { ...props } addToCart={ this.addToCart } />) }
            />
            <Route
              exact
              path="/shoppingcart"
              render={ (props) => (<ShoppingCart
                { ...props }
                cartItems={ cartItems }
              />) }

            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
