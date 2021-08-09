import React, { Component } from 'react';
import ProductCard from './ProductCard';

import * as api from '../services/api';

class ProductList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      text: '',
    };

    this.getProducts = this.getProducts.bind(this);
  }

  componentDidMount() {
    this.getProducts();
  }

  async getProducts() {
    const { text } = this.state;
    const products = await api.getProductsFromCategoryAndQuery(text);
    console.log(text);
    this.setState({
      products: [products],
    });
  }

  render() {
    const { products } = this.state;
    return (
      <div data-testid="query-input" className="product-list">
        {products.map((product) => (
          <ProductCard
            key={ product.id }
            product={ product }
          />
        ))}
      </div>
    );
  }
}

export default ProductList;
