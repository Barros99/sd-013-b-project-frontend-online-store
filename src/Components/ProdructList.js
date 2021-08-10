import React from 'react';
import PropTypes from 'prop-types';
import ProdructCard from './ProductCard';

class ProductList extends React.Component {
  render() {
    const { products } = this.props;
    console.log(this.props);
    return (
      <div>
        Product List test
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
