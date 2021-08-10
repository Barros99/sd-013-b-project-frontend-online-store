import React from 'react';
import PropTypes from 'prop-types';

export default class ProductInCart extends React.Component {
  constructor(props) {
    super(props);
    const { product } = props;
    this.state = {
      quantity: 1,
      maxQuantity: product.available_quantity,
    };
  }

  handleClickMore = () => {
    this.setState((prevValue) => ({
      quantity: prevValue.quantity === prevValue.maxQuantity
        ? prevValue.maxQuantity
        : prevValue.quantity + 1,
    }));
  }

  handleClickLess = () => {
    this.setState((prevValue) => ({
      quantity: prevValue.quantity === 1 ? 1 : prevValue.quantity - 1,
    }));
  }

  render() {
    const { quantity } = this.state;
    const { product } = this.props;
    return (
      <div>
        <h3 data-testid="shopping-cart-product-name">{ product.title }</h3>
        <product>
          Quantidade:
          <span data-testid="shopping-cart-product-quantity">{quantity}</span>
        </product>
        <span>{product.price * quantity}</span>
        <button
          data-testid="product-increase-quantity"
          type="button"
          onClick={ this.handleClickMore }
        >
          +
        </button>
        <button
          data-testid="product-decrease-quantity"
          type="button"
          onClick={ this.handleClickLess }
        >
          -
        </button>
      </div>
    );
  }
}

ProductInCart.propTypes = {
  product: PropTypes.objectOf().isRequired,
};
