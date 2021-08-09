import React, { Component } from 'react';
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
  }

  handleChange(event) {
    const { value } = event.target;
    this.setState({
      query: value,
    });
  }

  handleChangeOnInput(event) {
    const { value } = event.target;
    this.setState({
      categoryId: value,
    });
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
    const { results } = products;
    this.setState({
      products: results,
    });
  }

  render() {
    const { categories, products } = this.state;
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
                  { name }
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
              products.map(({ id, title, price, thumbnail }) => (
                <div key={ id } data-testid="product">
                  <img src={ thumbnail } alt={ title } />
                  <p>{title}</p>
                  <p>{price}</p>
                </div>
              ))
            }
          </div>
        </div>

      </div>
    );
  }
}

export default Initial;
