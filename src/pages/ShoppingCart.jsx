import React from 'react';
import ShoppingCartButton from '../components/ShoppingCartButton';

class ShoppingCart extends React.Component {
  render() {
    return (
      <div>
        <ShoppingCartButton />
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
      </div>
    );
  }
}

export default ShoppingCart;
