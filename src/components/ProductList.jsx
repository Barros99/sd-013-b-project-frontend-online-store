import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/api';
import ProductCard from './ProductCard';

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    this.fetchProducts();
  }

  // componentDidUpdate(prevProp) {
  //   const { query } = this.props;
  //   if (prevProp.query !== query) {
  //     this.fetchProducts();
  //   }
  // }

  async fetchProducts() {
    const { query, catId } = this.props;
    const fetch = await api.getProductsFromCategoryAndQuery(catId, query);
    const results = await fetch.results;
    this.setState({ products: results });
  }

  render() {
    const { query } = this.props;
    const { products } = this.state;
    if (!products) return <div>Nenhum produto foi encontrado</div>;
    return (
      <div>
        {products.map((prod) => (
          <ProductCard key={ prod.id } product={ prod } query={ query } />
        ))}
      </div>
    );
  }
}

ProductList.propTypes = {
  query: PropTypes.string.isRequired,
  catId: PropTypes.string.isRequired,
};

export default ProductList;
