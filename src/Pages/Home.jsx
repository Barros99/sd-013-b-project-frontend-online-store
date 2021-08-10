import React, { Component } from 'react';
import SearchBar from '../Components/SearchBar';
import CartButton from '../Components/CartButton';
import SideBar from '../Components/SideBar';
import SearchButton from '../Components/SearchButton';
import CardList from '../Components/CardList';

export default class Home extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      searchValueHome: '',
      productsArray: [],
    };
  }

  handleChange(callback) {
    this.setState({
      searchValueHome: callback,
    });
  }

  handleClick(callback) {
    this.setState({
      productsArray: callback,
    });
  }

  render() {
    const { searchValueHome, productsArray } = this.state;
    return (
      <div>
        <SearchBar onInputChange={ this.handleChange } />
        <SearchButton
          searchValueHome={ searchValueHome }
          onButtonClick={ this.handleClick }
        />
        <CartButton />
        <CardList productsList={ productsArray } />
        <SideBar />
      </div>
    );
  }
}
