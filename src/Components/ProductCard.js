import React from 'react';
import PropTypes from 'prop-types';

class ProductCard extends React.Component {
  render() {
    const { product } = this.props;
    const { title, thumbnail, price } = product;
    return (
      <div data-testid="product">
        <p>
          { title }
        </p>
        <img src={ thumbnail } alt="test" />
        <h2>
          { price }
        </h2>
      </div>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      thumbnail: PropTypes.string,
      price: PropTypes.string,
    }).isRequired,
  ).isRequired,
};

export default ProductCard;
