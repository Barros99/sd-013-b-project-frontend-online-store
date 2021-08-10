import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import Category from '../components/Category';
import ProductsList from '../components/ProductsList';
import { getProductsFromCategoryAndQuery } from '../services/api';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      selectedCategory: '',
      products: 'noSearchAlready',
    };
  }

  handleChange = ({ target }) => {
    this.setState({ searchText: target.value });
  }

  handleRadioButton = ({ target }) => {
    this.setState({ selectedCategory: target.value });
  }

  handleSearchButton = () => {
    this.setState({ products: 'Carregando...' }, async () => {
      const { selectedCategory, searchText } = this.state;
      const data = await getProductsFromCategoryAndQuery(selectedCategory, searchText);
      await this.setState({ products: data.results });
    });
  }

  render() {
    const { searchText, products } = this.state;
    return (
      <div>
        <SearchBar
          handleChange={ this.handleChange }
          searchText={ searchText }
          handleSearchButton={ this.handleSearchButton }
        />
        <Link to="/shoppingKart" data-testid="shopping-cart-button">Carrinho</Link>
        <Category handleRadioButton={ this.handleRadioButton } />
        <ProductsList products={ products } />
      </div>
    );
  }
}

export default Home;
