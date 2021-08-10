import React, { Component } from 'react';
import ProductInCart from './ProductInCart';

export default class ShoppingCart extends Component {
  render() {
    const localStorageCartList = JSON.parse(localStorage.getItem('productList'));

    if (localStorageCartList.length === 0) {
      return <h2 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h2>;
    }
    return (
      <div>
        {localStorageCartList.map((jsonProduct) => {
          const product = JSON.parse(jsonProduct);
          return (
            <ProductInCart key={ product.id } product={ product } />
          );
        })}
      </div>
    );
  }
}
