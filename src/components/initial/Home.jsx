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
      send: '',
    };

    this.fetchCategoriesList = this.fetchCategoriesList.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.submitQuery = this.submitQuery.bind(this);
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

  submitQuery() {
    const { input } = this.state;
    this.setState({ send: input });
  }

  fetchCategoriesList() {
    api.getCategories().then((categories) => {
      this.setState({
        categories,
      });
    });
  }

  render() {
    const { catId, send, categories } = this.state;

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
        <CategoriesList categories={ categories } />
        <section>
          <ProductList query={ send } catId={ catId } />
        </section>
        <Link to="/shop" data-testid="shopping-cart-button">
          Carrinho de compras
          <RiShoppingCartLine />
        </Link>
      </>
    );
  }
}

export default Home;
