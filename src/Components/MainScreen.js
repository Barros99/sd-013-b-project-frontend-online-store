import React from 'react';
import { Link } from 'react-router-dom';
import CategoryList from './CategoryList';

class MainScreen extends React.Component {
  render() {
    return (
      <div data-testid="home-initial-message">
        <label htmlFor="searchBar">
          Digite algum termo de pesquisa ou escolha uma
          categoria.
          <input
            type="text"
            name="searchBar"
          />
        </label>
        <Link
          to="/ShoppCart"
          data-testid="shopping-cart-button"
        >
          Carrinho
        </Link>
        <CategoryList />

      </div>
    );
  }
}

export default MainScreen;
