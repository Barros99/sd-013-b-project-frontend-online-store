import React from 'react';
import { Link } from 'react-router-dom';
import Categories from '../components/Categories';
import InputDigital from '../components/InputDigital';

class Home extends React.Component {
  render() {
    return (
      <div>
        <Categories />
        <InputDigital />
        <Link
          data-testid="shopping-cart-button"
          to="/carrinhodecompra"
        >
          carrinho de compra
        </Link>
      </div>
    );
  }
}

export default Home;
