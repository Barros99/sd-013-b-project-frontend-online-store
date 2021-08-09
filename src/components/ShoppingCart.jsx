import React from 'react';

export default class ShoppingCart extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     emptyCart: true,
  //     cartList: props.cart,
  //   };
  // }

  render() {
    return (
      <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
    );
  }
}
