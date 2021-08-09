import React from 'react';
import { Link } from 'react-router-dom';

export default class SearchBar extends React.Component {
  render() {
    return (
      <section>
        <div className="search-bar">
          <input
            type="text"
            className="search-bar-input"
            placeholder="Busque por um produto"
          />
          <Link data-testid="shopping-cart-button" to="/cart">Carrinho</Link>
        </div>
        <div className="home-message">
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
        </div>
      </section>
    );
  }
}
