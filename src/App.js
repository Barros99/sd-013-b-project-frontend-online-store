import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { ProductList } from './pages';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={ ProductList } />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
