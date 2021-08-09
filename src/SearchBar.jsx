import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Category from './Category';

export default class SearchBar extends Component {
  render() {
    return (
      <div>
        <label htmlFor="input-search-bar">
          <h3 data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </h3>
          <input
            type="text"
            id="input-search-bar"
          />
        </label>
        <Link to="shoppingcart" data-testid="shopping-cart-button">
          Carrinho
        </Link>
        <Category />
      </div>
    );
  }
}
