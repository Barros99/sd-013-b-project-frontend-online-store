import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductDetail extends Component {
  render() {
    const { location: { title } } = this.props;
    return (
      <div>
        <p data-testid="product-detail-name">
          { title }
        </p>
      </div>
    );
  }
}

ProductDetail.propTypes = {
  location: PropTypes.objectOf(PropTypes.string),
}.isRequired;

export default ProductDetail;
