import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import RenderCard from './RenderCard';
import Category from './Category';

const api = require('../services/api');

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      products: [],
    };

    this.handleChangeCategory = this.handleChangeCategory.bind(this);
  }

  // async componentDidMount() {
  //   const products = await api.getProductsFromCategoryAndQuery();
  //   updateState(products);
  // }

  // updateState = (products) => this.setState({ products: products.results });

  handleClick = () => {
    const { searchText } = this.state;
    return api.getProductsFromCategoryAndQuery('&CATEGORY_ID', searchText)
      .then((products) => {
        this.setState({ products: products.results });
      });
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  handleChangeCategory(catego) {
    return api.getProductsFromCategoryAndQuery(catego)
      .then((products) => {
        this.setState({ products: products.results });
      });
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
        <Category onChange={ this.handleChangeCategory } />
        <RenderCard products={ products } />
      </main>
    );
  }
}
