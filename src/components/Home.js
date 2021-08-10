import React from 'react';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from './ShoppingCartIcon';

class Home extends React.Component {
  render() {
    return (
      <div>
        <Link
          to="/shopping-cart"
          data-testid="shopping-cart-button"
        >
          <ShoppingCartIcon />
        </Link>
      </div>
    );
  }
}

export default Home;
