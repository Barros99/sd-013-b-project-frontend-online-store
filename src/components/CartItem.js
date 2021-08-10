import React from 'react';
import PropTypes from 'prop-types';

class Cart extends React.Component {
  render() {
    const { title, thumbnail, amount } = this.props;
    return (
      <div>
        <p data-testid="shopping-cart-product-name">{ title }</p>
        <img src={ thumbnail } alt={ `foto do produto ${title}` } />
        <p data-testid="shopping-cart-product-quantity">{ amount }</p>
      </div>
    );
  }
}

Cart.propTypes = {
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
};

export default Cart;
