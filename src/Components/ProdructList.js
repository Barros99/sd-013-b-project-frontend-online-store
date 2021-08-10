import React from 'react';
import PropTypes from 'prop-types';
import ProdructCard from './ProductCard';

class ProductList extends React.Component {
  render() {
    const { products: { results } } = this.props;
    return (
      <div>
        {results.map((product) => <ProdructCard key={ product.id } product={ product } />)}
      </div>
    );
  }
}

export default ProductList;

ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      query: PropTypes.string,
    }),

  ).isRequired,
};
