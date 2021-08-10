import React from 'react';
import SearchBar from '../components/SearchBar';
import CardList from '../components/CardList';
import * as api from '../services/api';

class Home extends React.Component {
  constructor() {
    super();
    this.onSearchSubmit = this.onSearchSubmit.bind(this);
    this.fetchProducts = this.fetchProducts.bind(this);
    this.state = {
      products: [],
      search: '',
    };
  }

  onSearchSubmit(value) {
    const { search } = this.state;
    this.setState({
      search: value,
    }, () => this.fetchProducts(search));
  }

  async fetchProducts(query) {
    const response = await api.getProductsFromCategoryAndQuery('', query);
    const products = response.results;
    this.setState({
      products,
    });
  }

  render() {
    const { products } = this.state;

    const message = (
      <h2 data-testid="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
      </h2>
    );
    return (
      <div>
        <SearchBar onSubmit={ this.onSearchSubmit } />
        {products.length > 0
          ? <CardList products={ products } /> : message}
      </div>
    );
  }
}

export default Home;
