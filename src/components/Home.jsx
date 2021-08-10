import React from 'react';
import Categories from './Categories';
import * as api from '../services/api';
import ProductList from './ProductList';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      resultList: [],
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
          resultList: results,
        })
      ));
  }

  render() {
    const { resultList } = this.state;
    return (
      <div>
        <label htmlFor="search" data-testid="home-initial-message">
          <input
            type="text"
            name="search"
            id="search"
            data-testid="query-input"
            onChange={ this.listner }
          />
          Digite algum termo de pesquisa ou escolha uma categoria.
        </label>
        <button
          type="button"
          data-testid="query-button"
          onClick={ this.cathProducts }
        >
          Search
        </button>
        <Categories />

        <div>
          {
            resultList
              .map((product) => <ProductList key={ product.id } product={ product } />)
          }
        </div>
      </div>
    );
  }
}
