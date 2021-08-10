import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import '../App.css';

class CartIcon extends React.Component {
  render() {
    return (
      <Link to="/shopping-cart" data-testid="shopping-cart-button">
        <FontAwesomeIcon icon={ faCartPlus } className="shoppingCart" size="3x" />
      </Link>
    );
  }
}

export default CartIcon;
