import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';
import Cart from './components/Cart';
import NotFound from './components/NotFound';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cartList: [],
    };
  }

  render() {
    const { cartList } = this.state;
    return (
      <div className="">
        <BrowserRouter>
          <Route
            exact
            path="/cart"
            render={ ((props) => <Cart { ...props } list={ cartList } />) }
          />
          <Route component={ NotFound } />
        </BrowserRouter>
      </div>
    );
  }
}
