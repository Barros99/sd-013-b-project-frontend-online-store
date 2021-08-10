import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Cart from './Pages/Cart';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ HomePage } />
          <Route path="/cart" component={ Cart } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
