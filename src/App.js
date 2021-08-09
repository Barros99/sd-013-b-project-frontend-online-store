import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ShoppingCart from './components/ShoppingCart';
import Home from './components/Home';
import Categories from './components/Categories';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/shoppingcart" render={ () => <ShoppingCart /> } />
        </Switch>
      </BrowserRouter>
        <Categories />
    );
  }
}

export default App;
