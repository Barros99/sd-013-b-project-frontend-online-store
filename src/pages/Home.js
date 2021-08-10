import React from 'react';
import { Link } from 'react-router-dom';
import * as api from '../services/api';

import CartIcon from '../components/CartIcon';
import SearchBar from '../components/SearchBar';
import CardList from '../components/CardList';
import CategoriesList from '../components/CategoriesList';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.setCategory = this.setCategory.bind(this);
    this.onSearchSubmit = this.onSearchSubmit.bind(this);
    this.fetchProducts = this.fetchProducts.bind(this);
    this.state = {
      products: [],
      search: '',
      categoryID: '',
      categories: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.fetchCategoriesList();
  }

  onSearchSubmit(value) {
    const { search } = this.state;
    this.setState({
      search: value,
    }, () => this.fetchProducts(search));
  }

  setCategory(categoryID) {
    this.setState({
      categoryID,
    });
  }

  fetchCategoriesList() {
    api.getCategories().then((categories) => {
      this.setState({
        categories,
        loading: false,
      });
    });
  }

  async fetchProducts(query) {
    const response = await api.getProductsFromCategoryAndQuery('', query);
    const products = response.results;
    this.setState({
      products,
    });
  }

  render() {
    const { products, categories, loading, categoryID } = this.state;
    console.log(categoryID);

    const message = (
      <h2 data-testid="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
      </h2>
    );
    return (
      <div>
        <SearchBar onSubmit={ this.onSearchSubmit } />
        <Link to="/shopping-cart" data-testid="shopping-cart-button">
          <CartIcon />
        </Link>
        {products.length > 0
          ? <CardList products={ products } /> : message}
        { !loading && (
          <CategoriesList categories={ categories } setCategory={ this.setCategory } />) }
      </div>
    );
  }
}

export default Home;
