import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Empty from './Empty';
import CartItem from './CartItem';

class ShoppingCart extends Component {
  constructor(props) {
    super(props);

    const { cartItems } = this.props;
    this.state = {
      products: cartItems,
    };
  }

  render() {
    const { products } = this.state;
    if (products.length === 0) {
      return (
        <div>
          <Empty />
          <Link to="/">Home</Link>
        </div>);
    } if (products.length !== 0) {
      return (
        <div>
          <CartItem products={ products } />
          <Link to="/">Home</Link>
        </div>);
    }
  }
}

ShoppingCart.propTypes = {
  cartItems: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ShoppingCart;
