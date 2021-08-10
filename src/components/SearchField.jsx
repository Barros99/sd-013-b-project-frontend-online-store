import React, { Component } from 'react';
import { getProductsFromCategoryAndQuery } from '../services/api';
import ProductList from './ProductList';

class SearchField extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchField: '',
      products: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  async handleClick() {
    const { searchField } = this.state;
    console.log(searchField);
    const products = await getProductsFromCategoryAndQuery('MLB1196', searchField);
    this.setState({
      products: products.results,
    });
  }

  render() {
    const { searchField, products } = this.state;
    return (
      <div>
        <button
          type="button"
          data-testid="query-button"
          onClick={ this.handleClick }
        >
          Buscar
        </button>
        <input
          data-testid="query-input"
          type="text"
          name="searchField"
          value={ searchField }
          onChange={ this.handleChange }
          placeholder="Ex: produto xxx"
        />
        <ProductList products={ products } />
      </div>
    );
  }
}

export default SearchField;
