import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class ProductList extends React.Component {
  render() {
    const { product } = this.props;
    const { title, thumbnail, price, id } = product;
    return (
      <Link
        to={ `/product-details/${id}` }
        data-testid="product-detail-link"
      >
        <div data-testid="product">
          <span>{title}</span>
          <img src={ thumbnail } alt={ title } />
          <span>{price}</span>
        </div>
      </Link>
    );
  }
}

ProductList.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};
