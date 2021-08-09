import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

class CartButton extends React.Component {
  render() {
    return (
      <Link data-testid="shopping-cart-button" to="/shopping-cart">Click Me!!</Link>
    );
  }
}

export default CartButton;
