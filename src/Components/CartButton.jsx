import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

export default class CartButton extends Component {
  render() {
    return (
      <div>
        <Route>
          <Link
            to="/shoppingcart"
            data-testid="shopping-cart-button"
          >
            Carrinho de compras
          </Link>
        </Route>
      </div>
    );
  }
}
