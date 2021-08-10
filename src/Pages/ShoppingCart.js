import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ShoppingCart extends Component {
  render() {
    const { products } = this.props;

    if (products.length === 0) {
      return (
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
      );
    }

    return (
      <div>
        {
          products.map(({ title, thumbnail, price, id }) => (
            <div key={ id }>
              <img alt={ title } src={ thumbnail } />
              <p data-testid="shopping-cart-product-name">{ title }</p>
              <p>{ price }</p>
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
