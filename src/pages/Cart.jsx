import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Cart extends Component {
  render() {
    return (
      <>
        <h1 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h1>
        <Link to="/">Voltar</Link>
      </>
    );
  }
}
