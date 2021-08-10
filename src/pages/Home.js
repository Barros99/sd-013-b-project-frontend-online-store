import React from 'react';
import PropTypes from 'prop-types';
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
    api.getCategories();
  }

  onSearchSubmit(value) {
    const { search } = this.state;
    this.setState(
      {
        search: value,
      },
      () => this.fetchProducts(search),
    );
  }

  setCategory(categoryID) {
    const { search } = this.state;
    this.setState(
      {
        categoryID,
      },
      () => this.fetchProducts(search),
    );
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
    const { categoryID } = this.state;
    const response = await api.getProductsFromCategoryAndQuery(categoryID, query);
    const products = response.results;
    this.setState({
      products,
    });
  }

  render() {
    const { addToCart } = this.props;
    const { products, categories, loading } = this.state;

    const message = (
      <h2 data-testid="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
      </h2>
    );
    return (
      <div>
        <SearchBar onSubmit={ this.onSearchSubmit } />
        <CartIcon />
        {products.length > 0
          ? <CardList addToCart={ addToCart } products={ products } /> : message}
        {!loading
        && <CategoriesList categories={ categories } setCategory={ this.setCategory } />}
      </div>
    );
  }
}

Home.propTypes = {
  addToCart: PropTypes.func.isRequired,
};

export default Home;
