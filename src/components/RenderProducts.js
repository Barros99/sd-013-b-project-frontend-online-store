import React from 'react';
import { getProductsFromCategoryAndQuery } from '../services/api';

class RenderProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
    this.renderProducts = this.renderProducts.bind(this);
    this.fetchProducts = this.fetchProducts.bind(this);
  }

  componentDidMount() {
    this.fetchProducts();
  }

  async fetchProducts() {
    const { query } = this.props;
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
    const { products } = this.state;
    const noReturn = <span>Nenhum produto foi encontrado</span>;
    return (
      <div>
        {(products.length > 0) ? this.renderProducts() : noReturn }
      </div>
    );
  }
}

export default RenderProducts;
