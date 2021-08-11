import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { RiShoppingCartLine } from 'react-icons/ri';
import * as api from '../../services/api';
import CategoriesList from '../CategoriesList';
import ProductList from '../ProductList';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
      catId: '',
      input: '',
      products: [],
    };

    this.fetchCategoriesList = this.fetchCategoriesList.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.submitQuery = this.submitQuery.bind(this);
    this.handleChangeCategory = this.handleChangeCategory.bind(this);
  }

  componentDidMount() {
    this.fetchCategoriesList();
  }

  handleChange({ target }) {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  }

  handleChangeCategory(radioValue) {
    this.setState({
      catId: radioValue,
    });
    this.fetchProducts(radioValue);
  }

  submitQuery() {
    const { catId } = this.state;
    this.fetchProducts(catId);
  }

  async fetchProducts(catId) {
    const { input } = this.state;
    console.log(catId, input);
    const fetch = await api.getProductsFromCategoryAndQuery(catId, input);
    const results = await fetch.results;
    this.setState({ products: results });
  }

  async fetchCategoriesList() {
    try {
      const fetch = await api.getCategories();
      console.log(fetch);
      this.setState({
        categories: fetch,
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    const { products, categories, catId } = this.state;

    return (
      <>
        <input
          type="text"
          placeholder="Digite o nome do produto"
          data-testid="query-input"
          onChange={ this.handleChange }
          name="input"
        />
        <button
          type="button"
          data-testid="query-button"
          onClick={ this.submitQuery }
        >
          Buscar
        </button>
        <h2 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h2>
        <CategoriesList
          categories={ categories }
          handleChangeCategory={ this.handleChangeCategory }
          catId={ catId }
        />
        <ProductList products={ products } />
        <Link to="/shop" data-testid="shopping-cart-button">
          Carrinho de compras
          <RiShoppingCartLine />
        </Link>
      </>
    );
  }
}

export default Home;
