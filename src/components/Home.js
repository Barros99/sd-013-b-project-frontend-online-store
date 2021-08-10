import React from 'react';
import { Link } from 'react-router-dom';

import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import ShoppingCartIcon from './ShoppingCartIcon';
import ProductList from './ProductList';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
      searchBar: '',
      productList: [],
    };

    this.fetchCategories = this.fetchCategories.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  async componentDidMount() {
    await this.fetchCategories();
  }

  handleChange(event) {
    this.setState({
      searchBar: event.target.value,
    });
  }

  async handleClick() {
    const { searchBar } = this.state;
    const productList = await getProductsFromCategoryAndQuery('', searchBar);
    const productsInfo = productList.results;
    this.setState({
      productList: productsInfo,
    });
  }

  async fetchCategories() {
    const categories = await getCategories();
    this.setState({
      categories,
    });
  }

  render() {
    const { categories, productList } = this.state;
    return (
      <div>
        <Link
          to="/shopping-cart"
          data-testid="shopping-cart-button"
        >
          <ShoppingCartIcon />
        </Link>

        <input
          type="text"
          data-testid="query-input"
          onChange={ this.handleChange }
        />
        <button
          type="button"
          data-testid="query-button"
          onClick={ this.handleClick }
        >
          Buscar
        </button>
        <h3 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma
          categoria.
        </h3>
        <div>
          <p>Categorias:</p>
          {categories.map((categorie) => (
            <li key={ categorie.id }>
              <label
                htmlFor="categorie"
                name="categorie"
                key={ categorie.id }
                data-testid="category"
              >
                <input type="radio" name="categorie" />
                { categorie.name }
              </label>
            </li>
          ))}
        </div>
        <ProductList productList={ productList } />
      </div>
    );
  }
}

export default Home;
