import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
// FEITO POR TODOS VIA PAIR PROGRAMING;

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={ () => <Home /> } />
        <Route path="/cart" component={ Cart } />
      </Switch>
    </BrowserRouter>
  );
}
