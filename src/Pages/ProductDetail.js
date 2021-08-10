import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Header from '../Components/Header';

class ProductDetail extends Component {
  render() {
    const {
      location: { title,
        thumbnail,
        price,
        id,
      },
      handleChange } = this.props;
    const quantity = 1;
    return (
      <div>
        <Header />
        <p data-testid="product-detail-name">
          { title }
        </p>
        <p>
          {price}
        </p>
        <img alt={ title } src={ thumbnail } />
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={ () => handleChange({ title, thumbnail, price, id, quantity }) }
        >
          Add to cart
        </button>
        <Link to="/">Back</Link>
      </div>
    );
  }
}

ProductDetail.propTypes = {
  location: PropTypes.objectOf(PropTypes.string),
  handleChange: PropTypes.func,
}.isRequired;

export default ProductDetail;
