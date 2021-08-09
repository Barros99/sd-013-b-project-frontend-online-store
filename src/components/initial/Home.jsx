import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <>
        <input type="text" placeholder="Digite o nome do produto" />
        <h2 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h2>
        <Link to="/shop" data-testid="shopping-cart-button">Carrinho de Compras</Link>
      </>
    );
  }
}

export default Home;
