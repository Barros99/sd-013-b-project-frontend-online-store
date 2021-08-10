import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from '../Components/Header';
import * as api from '../services/api';
import './initial.css';

class Initial extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      categoryId: '',
      query: '',
      products: [],
    };

    this.fetchProducts = this.fetchProducts.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeOnInput = this.handleChangeOnInput.bind(this);
  }

  componentDidMount() {
    this.fetchCategories();
    this.fetchProducts();
  }

  handleChange(event) {
    const { value } = event.target;
    this.setState({
      query: value,
    });
  }

  async handleChangeOnInput(event) {
    const { value } = event.target;
    const { query } = this.state;
    await this.setState({
      categoryId: value,
    });

    if (!query) {
      this.fetchProducts();
    }
  }

  async fetchCategories() {
    const categories = await api.getCategories();
    this.setState({
      categories,
    });
  }

  async fetchProducts() {
    const { categoryId, query } = this.state;
    const products = await api.getProductsFromCategoryAndQuery(categoryId, query);
    if (!products) return;
    const { results } = products;
    this.setState({
      products: results,
    });
  }

  render() {
    const { categories, products } = this.state;
    const { handleChangeOnCart } = this.props;
    const quantity = 1;
    return (
      <div className="main-content">

        <div className="category">
          {
            categories.map(({ name, id }) => (
              <div key={ id } data-testid="category">
                <label htmlFor={ id }>
                  <input
                    type="radio"
                    name="category"
                    id={ id }
                    value={ id }
                    onChange={ this.handleChangeOnInput }
                  />
                  {name}
                </label>
              </div>
            ))
          }
        </div>

        <div className="content">
          <Header change={ this.handleChange } search={ this.fetchProducts } />
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
          <div>
            {
              products.map(({ id, title, price, thumbnail, attributes }) => (
                <div key={ id }>
                  <Link
                    data-testid="product-detail-link"
                    to={ {
                      pathname: `/product-detail/${id}`,
                      title,
                      price,
                      thumbnail,
                      attributes,
                      id,
                    } }
                  >
                    <div data-testid="product">
                      <img src={ thumbnail } alt={ title } />
                      <p>{title}</p>
                      <p>{price}</p>
                    </div>
                  </Link>
                  <button
                    type="button"
                    data-testid="product-add-to-cart"
                    onClick={ () => (
                      handleChangeOnCart({ title, thumbnail, price, id, quantity })
                    ) }
                  >
                    Add to cart
                  </button>
                </div>
              ))
            }
          </div>
        </div>

      </div>
    );
  }
}

Initial.propTypes = {
  handleChange: PropTypes.func,
}.isRequired;

export default Initial;
