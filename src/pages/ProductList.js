import React from 'react';
import { getProductsFromCategoryAndQuery as ApiProducts } from '../services/api';
import ProductCard from '../components/ProductCard';
import CategoryFilter from '../components/CategoryFilter';
import CartButton from '../components/CartButton';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      searchInput: '',
      categoryId: '',
    };

    this.handleSearchInput = this.handleSearchInput.bind(this);
    this.handleSearchButton = this.handleSearchButton.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
  }

  handleSearchInput(event) {
    const { value } = event.target;
    this.setState({
      searchInput: value,
    });
  }

  async handleSearchButton() {
    const { searchInput, categoryId } = this.state;
    const products = await ApiProducts(categoryId, searchInput);
    this.setState({
      products: products.results,
      searchInput: '',
    });
  }

  handleCategoryChange(event) {
    this.setState({
      categoryId: event.target.id,
    }, () => this.handleSearchButton());
  }

  render() {
    const { products, searchInput } = this.state;
    return (
      <div>
        <input
          data-testid="query-input"
          value={ searchInput }
          onChange={ this.handleSearchInput }
        />
        <button
          type="button"
          data-testid="query-button"
          onClick={ this.handleSearchButton }
        >
          Pesquisar
        </button>
        <CartButton />
        <h4 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h4>
        <div>
          <CategoryFilter onChange={ this.handleCategoryChange } />
        </div>
        <div>
          {products
            .map((product) => <ProductCard key={ product.id } product={ product } />)}
        </div>
      </div>
    );
  }
}

export default ProductList;
