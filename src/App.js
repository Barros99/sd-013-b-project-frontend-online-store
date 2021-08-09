import React from 'react';
import { Route, Router, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';
import ProductList from './components/ProductList';
/* import * as api from './services/api'; */

function App() {
  return (
    <BrowserRouter>
      <main>
        <Switch>
          <Route exact path="/" component={ ProductList } />
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
