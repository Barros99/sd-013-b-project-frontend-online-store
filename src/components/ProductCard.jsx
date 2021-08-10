import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductCard extends Component {
  render() {
    const { product } = this.props;
    return (
      <div data-testid="product">
        <h4>{ product.title }</h4>
        <img src={ product.thumbnail } alt="Imagem" />
        <p>{ product.price }</p>
      </div>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.objectOf(String).isRequired,
};

export default ProductCard;
