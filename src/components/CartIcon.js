import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import '../App.css';

class CartIcon extends React.Component {
  render() {
    return (
      <div>
        <FontAwesomeIcon icon={ faCartPlus } className="shoppingCart" size="3x" />
      </div>
    );
  }
}

export default CartIcon;
