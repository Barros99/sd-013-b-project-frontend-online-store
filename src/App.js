import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router';
// import { Home, NotFound, ProductDetails, Cart } from './components';

import Home from './components/Home';
import NotFound from './components/NotFound';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/details/:id" component={ ProductDetails } />
        <Route exact path="/" component={ Home } />
        <Route exact path="/cart" component={ Cart } />
        <Route component={ NotFound } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
