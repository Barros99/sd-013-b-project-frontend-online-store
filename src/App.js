import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import SearchField from './components/SearchField';
import CardDetails from './components/CardDetails';
import Cart from './components/Cart';
import NotFound from './components/NotFound';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.productDetails = this.productDetails.bind(this);
    this.addToCart = this.addToCart.bind(this);

    this.state = {
      cartList: [],
      productObj: [],
    };
  }

  productDetails(object) {
    this.setState({ productObj: object });
  }

  render() {
    const { cartList, productObj } = this.state;
    return (
      <div className="">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={ SearchField } />
            <Route
              exact
              path="/product/:id"
              render={ ((props) => <CardDetails { ...props } product={ productObj } />) }
            />
            <Route
              exact
              path="/cart"
              render={ ((props) => <Cart { ...props } list={ cartList } />) }
            />
            <Route component={ NotFound } />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
