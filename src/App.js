import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
// import * as api from './services/api';
import './App.css';
import ShoppingCart from './pages/ShoppingCart';
import ProductDetails from './pages/ProductDetails';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
    };
  }

  addToCart = (product) => {
    const {
      id,
      available_quantity: availableQuantity,
      price,
      title,
      thumbnail,
    } = product;
    const newItem = { id, availableQuantity, price, title, thumbnail };
    this.setState((prevState) => ({
      cart: [...prevState.cart, newItem],
    }));
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={ () => <Home addToCart={ this.addToCart } /> } />
          <Route exact path="/shopping-cart" component={ ShoppingCart } />
          <Route exact path="/product-details" component={ ProductDetails } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
