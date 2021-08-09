import React, { Component } from 'react';
import SearchBar from '../Components/SearchBar';
import CartButton from '../Components/CartButton';
import SideBar from '../Components/SideBar';

export default class Home extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <CartButton />
        <SideBar />
      </div>
    );
  }
}
