import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ProductList from './pages/ProductList';
import ShoppingCart from './pages/ShoppingCart';
import ProductDetails from './pages/ProductDetails';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      quantity: 0,
    };

    this.handleAddCartChange = this.handleAddCartChange.bind(this);
  }

  handleAddCartChange(event) {
    this.setState({
      title: event.target.value,
      quantity: 1,
    });
  }

  render() {
    const { title, quantity } = this.state;
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={ (props) => (<ProductList
              { ...props }
              onClickButton={ this.handleAddCartChange }
            />) }
          />
          <Route
            exact
            path="/shopping-cart"
            render={ () => <ShoppingCart title={ title } quantity={ quantity } /> }
          />
          <Route
            exact
            path="/product-details/:categoryId/:productName"
            render={ (props) => (<ProductDetails
              { ...props }
              onClickButton={ this.handleAddCartChange }
            />) }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
