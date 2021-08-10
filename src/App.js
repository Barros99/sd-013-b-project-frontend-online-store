import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
// import Categories from './Components/Categories';
import Cart from './Pages/Cart';
import ProductDetail from './Pages/ProductDetail';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/Cart" component={ Cart } />
          <Route exact path="/:id" render={ (props) => <ProductDetail info={ props } /> } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
