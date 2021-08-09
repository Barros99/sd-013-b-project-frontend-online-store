import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Cart from './components/Cart';

function App() {
  return (
    <Router>
      <Route exact path="/" component={ Home } />
      <Route exact path="/cart" component={ Cart } />
    </Router>
  );
}

export default App;
