import React from 'react';
import PropTypes from 'prop-types';

import Product from '../Product';

// import './style.css';

class ProductList extends React.Component {
  render() {
    const { productList } = this.props;

    if (!productList.length) {
      return (
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      );
    }

    return (
      <div>
        {productList.map((product) => (
          <Product key={ product.id } product={ product } />
        ))}
      </div>
    );
  }
}

ProductList.propTypes = {
  productList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProductList;
