import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BarSearch from './BarSearch';
import Category from './Category';
import ProductList from './ProductList';

class Home extends Component {
  render() {
    return (
      <>
        <header>
          <BarSearch />
          <Link data-testid="shopping-cart-button" to="cart/">Cart</Link>
        </header>
        <main>
          <Category />
          <ProductList />
        </main>
      </>
    );
  }
}

export default Home;
