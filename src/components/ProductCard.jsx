import React from 'react';
import PropTypes from 'prop-types';

class ProductCard extends React.Component {
  render() {
    const { product: { title, thumbnail, price }, key } = this.props;
    return (
      <div data-testid="product" key={ key }>
        <h1>{ title }</h1>
        <img src={ thumbnail } alt="Product Banner" />
        <p>{ price }</p>
      </div>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.string,
  }).isRequired,
  key: PropTypes.string.isRequired,
};

export default ProductCard;
