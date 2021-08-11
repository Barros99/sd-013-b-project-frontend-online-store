import React, { Component } from 'react';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasItems: false,
    };
  }

  render() {
    const { hasItems } = this.state;
    return (
      <p data-testid="shopping-cart-empty-message">
        {hasItems ? 'Tem items' : 'Seu carrinho está vazio'}
      </p>
    );
  }
}

export default Cart;
