import React from 'react';

class Cart extends React.Component {
  render() {
    return (
      <div className="cart">
        <h1 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h1>
      </div>
    );
  }
}

export default Cart;
