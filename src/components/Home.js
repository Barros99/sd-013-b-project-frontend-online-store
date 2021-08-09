import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <div>
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
      </div>
    );
  }
}

export default Home;
