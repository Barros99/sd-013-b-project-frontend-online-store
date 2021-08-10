import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

class Product extends React.Component {
  render() {
    const { product } = this.props;

    return (
      <div data-testid="product" key={ product.id }>
        <h2>{ product.title }</h2>
        <img src={ product.thumbnail } alt={ `imagem de ${product.title}` } />
        <p>{ product.price }</p>
      </div>
    );
  }
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default Product;
