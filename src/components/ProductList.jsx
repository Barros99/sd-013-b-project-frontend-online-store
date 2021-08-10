import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import ProductCard from './ProductCard';

import * as api from '../services/api';

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      category: '',
      query: '',
    };

    this.getProducts = this.getProducts.bind(this);
  }

  componentDidMount() {
    this.getProducts();
    const category = localStorage.getItem('categoryId');
    const query = localStorage.getItem('filterText');
    this.setState({
      category,
      query,
    });
  }

  componentDidUpdate() {
    // const category = localStorage.getItem('categoryId');
    // const query = localStorage.getItem('filterText');
    // this.setState({
    //   category,
    //   query,
    // });
    this.getProducts();
  }

  async getProducts() {
    const { category, query } = this.state;
    const products = await api.getProductsFromCategoryAndQuery(category, query);
    // console.log(text);
    this.setState({
      products: products.results,
    });
  }

  render() {
    const { products } = this.state;
    console.log(products);
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

// ProductList.propTypes = {
//   category: PropTypes.string.isRequired,
// };

export default ProductList;
