import React from 'react';

class Cart extends React.Component {
  render() {
    return (
      <div data-testid="shopping-cart-empty-message">
        <h2>Seu carrinho está vazio</h2>
      </div>
    );
  }
}

export default Cart;
