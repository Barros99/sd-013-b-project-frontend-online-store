import React from 'react';
import { Link } from 'react-router-dom';

class ShoppingCartButton extends React.Component {
  render() {
    return (
      <div>
        <Link data-testid="shopping-cart-button" to="/shopping-cart">Carrinho</Link>
      </div>
    );
  }
}

export default ShoppingCartButton;
