import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BarSearch from './BarSearch';

class Home extends Component {
  render() {
    return (
      <main>
        <BarSearch />
        <Link data-testid="shopping-cart-button" to="cart/">Cart</Link>
      </main>
    );
  }
}

export default Home;
