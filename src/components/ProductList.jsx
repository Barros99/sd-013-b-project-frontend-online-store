import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';

class ProductList extends Component {
  render() {
    const { products, query } = this.props;
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
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  query: PropTypes.string.isRequired,
};

export default ProductList;
