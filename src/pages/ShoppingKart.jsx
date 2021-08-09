import React, { Component } from 'react';

class ShoppingKart extends Component {
  render() {
    return (
      <div>
        <span data-testid="shopping-cart-empty-message">Seu carrinho está vazio</span>
      </div>
    );
  }
}

export default ShoppingKart;
