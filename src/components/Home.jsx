import React from 'react';
import Categories from './Categories';
import * as api from '../services/api';
import ProductList from './ProductList';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: [],
      categoryId: '',
      search: '',
    };

    this.listner = this.listner.bind(this);
    this.cathProducts = this.cathProducts.bind(this);
  }

  listner({ target }) {
    this.setState({
      search: target.value,
    });
  }

  cathProducts() {
    const { categoryId, search } = this.state;
    api.getProductsFromCategoryAndQuery(categoryId, search)
      .then(({ results }) => (
        this.setState({
          product: results,
        })
      ));
  }

  render() {
    const { product } = this.state;
    return (
      <div>
        <label htmlFor="search" data-testid="home-initial-message">
          <input type="text" name="search" id="search" />
          Digite algum termo de pesquisa ou escolha uma categoria.
        </label>
        <Categories />
        <input
          type="text"
          data-testid="query-input"
          onChange={ this.listner }
        />
        <button
          type="button"
          data-testid="query-button"
          onClick={ this.cathProducts }
        >
          Send
        </button>
        <ProductList product={ product } />
      </div>
    );
  }
}
