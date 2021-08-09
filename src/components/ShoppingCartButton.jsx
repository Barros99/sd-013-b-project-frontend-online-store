import React from 'react';
import { Link } from 'react-router-dom';

class ShoppingCartButton extends React.Component {
  render() {
    return (
      <Link to="/cart" data-testid="shopping-cart-button">
        <img width="50px" src="https://img2.gratispng.com/20180715/uib/kisspng-shopping-cart-clip-art-man-tgx-5b4b9bed4ab305.343851241531681773306.jpg" alt="ShoppingCart" />
      </Link>
    );
  }
}

export default ShoppingCartButton;
