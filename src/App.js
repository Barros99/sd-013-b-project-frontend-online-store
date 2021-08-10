import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ShoppingCart from './components/ShoppingCart';
import Main from './components/Main';
import ProductDetails from './components/ProductDetails';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/shopping-cart" component={ ShoppingCart } />
          <Route path="/products-details/:id" component={ ProductDetails } />
          <Route path="/" component={ Main } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
