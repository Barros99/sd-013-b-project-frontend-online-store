import React from 'react';
import { getProductsFromCategoryAndQuery } from '../services/api';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      query: '',
    };
    this.fetchProducts = this.fetchProducts.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.renderProducts = this.renderProducts.bind(this);
  }

  handleClick() {
    this.fetchProducts();
  }

  handleChange({ target }) {
    this.setState(() => ({
      query: target.value,
    }));
  }

  async fetchProducts() {
    const { query } = this.state;
    const products = await getProductsFromCategoryAndQuery(false, query);
    this.setState(() => ({
      products: products.results,
    }));
  }

  renderProducts() {
    const { products } = this.state;
    return (
      <div>
        {products.map(({ id, title, thumbnail, price }) => (
          <div key={ id } data-testid="product">
            <p>{ title }</p>
            <img src={ thumbnail } alt={ title } />
            <p>{ price }</p>
          </div>
        ))}
      </div>
    );
  }

  render() {
    const { query, products } = this.state;
    const noReturn = <span>Nenhum produto foi encontrado</span>;
    return (
      <div>
        <input
          type="text"
          data-testid="query-input"
          value={ query }
          onChange={ this.handleChange }
        />
        <button
          type="submit"
          data-testid="query-button"
          onClick={ this.handleClick }
        >
          Pesquisar
        </button>
        {(products.length > 0) ? this.renderProducts() : noReturn }
      </div>
    );
  }
}

export default SearchBar;
