import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ShoppingCart extends Component {
  render() {
    const { products, handleQuantity } = this.props;
    if (products.length === 0) {
      return (
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
      );
    }

    return (
      <div>
        {
          Object.keys(products).map((id) => (
            <div key={ products[id].id }>
              <img alt={ products[id].title } src={ products[id].thumbnail } />
              <p data-testid="shopping-cart-product-name">{ products[id].title }</p>
              <p>{ products[id].price }</p>
              <p data-testid="shopping-cart-product-quantity">
                <button
                  type="button"
                  data-testid="product-decrease-quantity"
                  onClick={ (event) => handleQuantity(event, id) }
                >
                  -
                </button>
                { products[id].quantity }
                <button
                  type="button"
                  data-testid="product-increase-quantity"
                  onClick={ (event) => handleQuantity(event, id) }
                >
                  +
                </button>
              </p>
            </div>
          ))
        }
        <Link to="/">Back</Link>
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  products: PropTypes.array,
}.isRequired;

export default ShoppingCart;
