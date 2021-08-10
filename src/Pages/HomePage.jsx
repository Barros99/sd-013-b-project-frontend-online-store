import React from 'react';
import { Link } from 'react-router-dom';

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <p
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <Link
          to="/cart"
          data-testid="shopping-cart-button"
        >
          Carrinho
        </Link>
      </div>
    );
  }
}

export default HomePage;
