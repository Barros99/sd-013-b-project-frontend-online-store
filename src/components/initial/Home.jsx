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
      productsCart: [],
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

  addToCart = (addProduct) => {
    const { productsCart } = this.state;
    productsCart.push(addProduct);
    this.setState({ productsCart });
  }

  submitQuery() {
    const { catId } = this.state;
    this.fetchProducts(catId);
  }

  async fetchProducts(catId) {
    const { input } = this.state;
    const fetch = await api.getProductsFromCategoryAndQuery(catId, input);
    const results = await fetch.results;
    this.setState({ products: results });
  }

  async fetchCategoriesList() {
    try {
      const fetch = await api.getCategories();
      this.setState({
        categories: fetch,
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    const { products, categories, catId, productsCart } = this.state;

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
        <ProductList products={ products } callToAdd={ this.addToCart } />
        <Link
          to={ { pathname: '/shop', state: { productsCart } } }
          data-testid="shopping-cart-button"
        >
          Carrinho de compras com
          <span>{` ${productsCart.length} `}</span>
          itens
          <RiShoppingCartLine />
        </Link>
      </>
    );
  }
}

export default Home;
