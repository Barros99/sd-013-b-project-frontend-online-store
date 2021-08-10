import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CarrinhoDeCompra from './pages/CarrinhoDeCompra';
import Home from './pages/Home';

function App() {
  return (
    <div>
      <Router>
        <Route exact path="/" component={ Home } />
        <Route path="/carrinhodecompra" component={ CarrinhoDeCompra } />
      </Router>
    </div>
  );
}

export default App;
