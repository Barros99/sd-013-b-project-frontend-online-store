import React from 'react';

class ShoppingCart extends React.Component {
  constructor() {
    super();

    this.state = {
      products: [],
    };
  }

  render() {
    const { location } = this.props;
    const { state } = location;
    const { product } = state.product;
    return (
      <div data-testid="shopping-cart-product-name">
        {
         
        product ?
          <div>
          <p>{ product.title }</p>
         <img src={ product.thumbnail } alt="foto" width="100px" />
         <p>{ product.price }</p>
         </div>
        
         :<p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
         
        }
        </div>
  }
}

export default ShoppingCart;
