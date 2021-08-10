import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class CardDetails extends Component {
  render() {
    const { product } = this.props;
    const { title, image, price, specs } = product;
    return (
      <section className="card-detail">
        <div>
          <p data-testid="product-detail-name" className="product-detail-name">
            { title }
          </p>
          <p className="product-detail-image">
            { image }
          </p>
          <p className="product-detail-price">
            { price }
          </p>
          <p className="product-detail-specs">
            { specs }
          </p>
        </div>
        <Link
          to="/cart"
          data-testid="shopping-cart-button"
          className="shopping-cart-button"
        >
          Cart
        </Link>
        <Link to="/" className="back-button">Voltar</Link>
      </section>
    );
  }
}

CardDetails.propTypes = {
  product: PropTypes.objectOf({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    specs: PropTypes.string.isRequired,
  }).isRequired,
};
