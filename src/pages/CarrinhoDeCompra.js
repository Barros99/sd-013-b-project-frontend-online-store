import React from 'react';

class CarrinhoDeCompra extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mensagem: true,
    };
  }

  render() {
    const { mensagem } = this.state;
    if (mensagem) {
      return (
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
      );
    }

    return (
      <>
      </>
    );
  }
}

export default CarrinhoDeCompra;
