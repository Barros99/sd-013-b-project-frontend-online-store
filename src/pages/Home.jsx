import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import Category from '../components/Category';

class Home extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <Link to="/shoppingKart" data-testid="shopping-cart-button">Carrinho</Link>
        <Category />
      </div>
    );
  }
}

export default Home;
