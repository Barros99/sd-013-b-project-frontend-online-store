import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div>
        <input type="text" />

        <Link
          to="/cart"
          data-testid="shopping-cart-button"
        >
          <img
            src="https://i.pinimg.com/originals/4b/a7/d8/4ba7d8d3c62e961494a50de2f61b2cc8.jpg"
            alt="Shopping Cart"
            height="60px"
          />
        </Link>

      </div>
    );
  }
}

export default Header;
