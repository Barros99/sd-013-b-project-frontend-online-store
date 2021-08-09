import React, { Component } from 'react';

class Cart extends Component {
  constructor() {
    super();

    this.state = {
      products: [],
    };
  }

  render() {
    const { products } = this.state;

    if (products.length < 1) {
      return (
        <span data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </span>
      );
    }

    return (
      <div>
        oi
      </div>
    );
  }
}

export default Cart;
