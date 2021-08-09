import React, { Component } from 'react';

export default class ShoppingCart extends Component {
  constructor() {
    super();

    this.state = {
      cart: [],
    };
  }

  render() {
    const { cart } = this.state;
    if (cart.length === 0) {
      return <h2 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h2>;
    }
    return (
      <div>
        <h1>fuewfweu</h1>
      </div>
    );
  }
}
