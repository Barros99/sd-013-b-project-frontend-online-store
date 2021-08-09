import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import Categories from '../components/Category';

class Home extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <Link to="/shoppingKart" data-testid="shopping-cart-button">Carrinho</Link>
        <Categories />
      </div>
    );
  }
}

export default Home;
