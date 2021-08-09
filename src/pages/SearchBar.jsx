import React from 'react';
import { Link } from 'react-router-dom';

class SearchBar extends React.Component {
  render() {
    return (
      <label htmlFor="input-search-bar">
        <div>
          <input type="text" />
          <h3 data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </h3>
        </div>
        <Link to="ShoppingCart" data-testid="shopping-cart-button">
          Carrinho
        </Link>
      </label>
    );
  }
}

export default SearchBar;
