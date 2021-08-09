import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../components/SearchBar';

class Home extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <Link to="/shoppingKart" data-testid="shopping-cart-button">Carrinho</Link>
      </div>
    );
  }
}

export default Home;
