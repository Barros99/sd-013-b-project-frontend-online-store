import React, { Component } from 'react';
// REQUISITO 3 FEITO POR TODOS VIA PAIR PROGRAMING;

export default class Cart extends Component {
  render() {
    return (
      <div data-testid="shopping-cart-empty-message">
        <p>Seu carrinho está vazio</p>
      </div>
    );
  }
}
