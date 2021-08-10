import React, { Component } from 'react';
import * as api from '../services/api';

export default class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      category: '',
      done: false,
      products: {},
    };
    this.handleChange = this.handleChange.bind(this);
    this.fetchProduct = this.fetchProduct.bind(this);
  }

  componentDidMount() {
    this.fetchProduct();
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  async fetchProduct() {
    const { category, searchText } = this.state;
    const fetchApi = await api.getProductsFromCategoryAndQuery(category, searchText);
    this.setState({
      products: fetchApi,
      done: true,
    });
  }

  render() {
    const { products: { results }, searchText, done } = this.state;
    console.log(results);
    // if (done) return 'Nenhum produto foi encontrado';
    return (
      <div>
        <form>
          <label htmlFor="pesquisar">
            <input
              type="text"
              name="searchText"
              onChange={ this.handleChange }
              value={ searchText }
              id="pesquisar"
              data-testid="query-input"
            />
            <button
              type="button"
              data-testid="query-button"
              onClick={ this.fetchProduct }
            >
              Pesquisar
            </button>
          </label>
        </form>
        <div>
          {done ? results.map(({ title, price, thumbnail, id }) => (
            <div key={ id } data-testid="product">
              <h3>{ title }</h3>
              <p>{ price }</p>
              <img src={ thumbnail } alt="foto" />
            </div>
          )) : 'nada encontrado'}
        </div>
        <h3 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h3>
      </div>
    );
  }
}
