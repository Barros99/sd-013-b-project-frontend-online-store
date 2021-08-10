import React from 'react';

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartProducts: [],
    };
  }

  render() {
    const { cartProducts } = this.state;
    if (cartProducts.length === 0) {
      return (
        <div data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </div>
      );
    }
  }
}

export default ShoppingCart;
