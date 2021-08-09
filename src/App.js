import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
// import Categories from './Components/Categories';
import Carts from './Pages/Cart';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/Cart" component={ Carts } />
        </Switch>
      </BrowserRouter>
      {/* <Categories /> */}

    </div>
  );
}

export default App;
