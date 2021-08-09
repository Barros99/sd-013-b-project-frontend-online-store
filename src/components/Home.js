import React from 'react';
import { Link } from 'react-router-dom';
import CategoriesAside from './CategoriesAside';

class Home extends React.Component {
  render() {
    return (
      <div>
        <div>
          <input type="text" data-testid="query-input" />
          <button type="submit" data-testid="query-button" onClick="">Pesquisar</button>
        </div>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <Link to="/shopping-cart">
          <button
            type="button"
            data-testid="shopping-cart-button"
          >
            Adicionar Carrinho
          </button>
        </Link>
        <aside>
          <CategoriesAside />
        </aside>
      </div>
    );
  }
}

export default Home;
