import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductCard extends Component {
  render() {
    const { product, query } = this.props;
    const { title, thumbnail, price } = product;

    return (
      <div data-testid="product" className="">
        Product Card
        <h4>{ title }</h4>
        <img src={ thumbnail } alt={ title } />
        <p>{ price }</p>
        <Link
          data-testid="product-detail-link"
          to={ { pathname: `/productDetails/${product.id}`, state: { foo: query } } }
        >
          Ver Detalhes
        </Link>
      </div>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.objectOf(PropTypes.string).isRequired,
  query: PropTypes.string.isRequired,
};

export default ProductCard;
