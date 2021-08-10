import React from 'react';
import ShoppingCartIcon from './ShoppingCartIcon';

class ShoppingCart extends React.Component {
  render() {
    return (
      <div>
        <ShoppingCartIcon />
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
      </div>
    );
  }
}

export default ShoppingCart;
