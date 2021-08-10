import React from 'react';

export default class Cart extends React.Component {
  constructor() {
    super();

    this.state = { vazio: true };
  }

  render() {
    const { vazio } = this.state;
    if (vazio) {
      return (
        <div data-testid="shopping-cart-empty-message">
          <h2>Seu carrinho está vazio</h2>
        </div>
      );
    }
    return (
      <div />
    );
  }
}
