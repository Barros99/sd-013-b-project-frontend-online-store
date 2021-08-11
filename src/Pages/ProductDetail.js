import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductDetail extends Component {
  render() {
    const { info: { history: { location: { state:
      { returnTo: detalhes } } } } } = this.props;
    return (
      <div data-testid="product-detail-name">
        <p>{detalhes.title}</p>
        <p>{detalhes.image}</p>
        <p>{detalhes.price}</p>
      </div>
    );
  }
}

ProductDetail.propTypes = {
  info: PropTypes.shape({
    history: PropTypes.shape({
      location: PropTypes.shape({
        state: PropTypes.shape({
          returnTo: PropTypes.shape({
            title: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
          }).isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default ProductDetail;
