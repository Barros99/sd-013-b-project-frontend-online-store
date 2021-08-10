import React from 'react';
import { Link } from 'react-router-dom';
import ProductList from '../Components/ProdructList';
import RadioButtons from '../Components/RadioButtons';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';

class MainScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
      products: [],
      search: {
        id: 0,
        query: '',
      },
    };

    this.fetchCategories = this.fetchCategories.bind(this);
    // this.handleSelect = this.handleSelect.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentDidMount() {
    this.fetchCategories();
    this.fetchProducts();
  }

  handleInputChange(event) {
    this.setState({
      search: {
        query: event.target.value,
      },
    });
  }

  // pega as categorias
  async fetchCategories() {
    const getResponse = await getCategories();
    this.setState({
      categories: getResponse,
    });
  }

  // pega os produtos
  async fetchProducts() {
    const { search: { id = 'MLB1403', query = 'cerveja' } } = this.state;
    const getResponse = await getProductsFromCategoryAndQuery(id, query);
    this.setState({
      products: getResponse,
    });
  }

  render() {
    const { categories, products } = this.state;
    return (
      <div data-testid="home-initial-message">
        <label htmlFor="searchBar">
          Digite algum termo de pesquisa ou escolha uma
          categoria.
          <input
            type="text"
            name="searchBar"
            data-testid="query-input"
            onChange={ this.handleInputChange }
          />
        </label>
        <Link
          to="/ShoppCart"
          data-testid="shopping-cart-button"
        >
          Carrinho
        </Link>
        <RadioButtons categories={ categories } />
        {products.results === undefined ? <div> sem produtos </div> : <ProductList products={ products } /> }

      </div>
    );
  }
}

export default MainScreen;
