import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CartButton extends Component {

  render() {
    return (
      <div>
        <Link data-testid="shopping-cart-button" to="/shoppingcart">Carrinho de Compras</Link>
      </div>
    )
  }
}

export default CartButton;