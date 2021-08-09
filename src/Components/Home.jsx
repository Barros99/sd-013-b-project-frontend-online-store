import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BarSearch from './BarSearch';
import Category from './Category';

class Home extends Component {
  render() {
    return (
      <main>
        <BarSearch />
        <Category />
        <Link data-testid="shopping-cart-button" to="cart/">Cart</Link>
      </main>
    );
  }
}

export default Home;
