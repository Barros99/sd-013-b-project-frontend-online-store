import React, { Component } from 'react';
import SearchBar from '../Components/SearchBar';
import CartButton from '../Components/CartButton';

export default class Home extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <CartButton />
      </div>
    );
  }
}
