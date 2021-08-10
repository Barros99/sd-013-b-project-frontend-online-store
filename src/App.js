import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import MainPage from './Components/MainPage';
import * as api from './services/api';

import './App.css';
import ShoppingCart from './Pages/ShoppingCart';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      loadingCategories: true,
      categories: [],
      inputSearch: '',
      shoppingCart: [],
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    api.getCategories()
      .then(
        (result) => this.setState({
          loadingCategories: false,
          categories: result,
        }),
      );

    // api.getProductsFromCategoryAndQuery('MLB5672', 'computador')
    //   .then((data) => console.log(data));
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value,
    });
  }

  render() {
    const { categories, loadingCategories, inputSearch, shoppingCart } = this.state;

    return (
      <BrowserRouter>
        <Route
          exact
          path="/"
          render={
            () => (<MainPage
              categories={ categories }
              loadingCategories={ loadingCategories }
              handleChange={ this.handleChange }
              inputSearch={ inputSearch }
            />)
          }
        />
        <Route
          path="/cart"
          render={ () => (<ShoppingCart shoppingCart={ shoppingCart } />) }
        />
      </BrowserRouter>
    );
  }
}
