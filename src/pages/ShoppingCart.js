import React from 'react';
import PropTypes from 'prop-types';

class ShoppingCart extends React.Component {
  render() {
    const { title, quantity } = this.props;
    if (title === '') {
      return (
        <h4 data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </h4>
      );
    }
    return (
      <div>
        <h4 data-testid="shopping-cart-product-name">{ title }</h4>
        <h3 data-testid="shopping-cart-product-quantity">
          Quantidade:
          { quantity }
          Und.
        </h3>
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  title: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default ShoppingCart;
