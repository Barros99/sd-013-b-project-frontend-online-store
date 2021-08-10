import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ShoppingKart from './pages/ShoppingKart';
import './App.css';

import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/shoppingKart" component={ ShoppingKart } />
        {/* <Route component={ NotFound } /> */}
        {/* ahds */}
      </Switch>
    </Router>
  );
}

export default App;
