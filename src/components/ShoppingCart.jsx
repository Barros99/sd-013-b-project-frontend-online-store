import React, { Component } from 'react';

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
            <div key={ product.id }>
              <h1 data-testid="shopping-cart-product-name">{ product.title }</h1>
              <p data-testid="shopping-cart-product-quantity">
                Quantidade:
                <span>1</span>
              </p>
            </div>
          );
        })}
      </div>
    );
  }
}
