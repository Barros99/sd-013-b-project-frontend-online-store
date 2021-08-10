import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router';
import Home from './components/Home';
import NotFound from './components/NotFound';
import './App.css';
import Cart from './components/Cart';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="*" component={ NotFound } />
        <Route exact path="/cart" component={ Cart } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
