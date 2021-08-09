import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import RenderCard from './RenderCard';
import Category from './Category';

const api = require('../services/api');

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: '',
      searchText: '',
      products: [],
    };
  }

  componentDidMount() {
    api.getProductsFromCategoryAndQuery()
      .then((products) => {
        this.setState({ products: products.results });
      });
  }

  handleClick = () => {
    console.log('passei aqui');
    const { category, searchText } = this.state;
    if (category === '') {
      return api.getProductsFromCategoryAndQuery('&CATEGORY_ID', searchText)
        .then((products) => {
          this.setState({ products: products.results });
        });
    }
    return api.getProductsFromCategoryAndQuery(category, searchText)
      .then((products) => {
        this.setState({ products: products.results });
      });
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  render() {
    const { searchText, products } = this.state;
    return (
      <main>
        <label htmlFor="input-search-bar">
          <h3 data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </h3>
          <input
            name="searchText"
            type="text"
            id="input-search-bar"
            data-testid="query-input"
            value={ searchText }
            onChange={ this.handleChange }
          />
          <button
            type="button"
            data-testid="query-button"
            onClick={ this.handleClick }
          >
            Pesquisar
          </button>
        </label>
        <Link to="shoppingcart" data-testid="shopping-cart-button">
          Carrinho
        </Link>
        <Category />
        <RenderCard products={ products } />
      </main>
    );
  }
}
