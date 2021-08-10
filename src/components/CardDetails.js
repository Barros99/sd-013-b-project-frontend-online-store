import React from 'react';
import { Link } from 'react-router-dom';

export default class Cart extends React.Component {
  render() {
    const { title, image, price, specs } = this.props;
    return (
      <section className="card-detail">
        <div>
          <p data-testid="product-detail-name">
            { title }
          </p>
          <p data-testid="product-detail-image">
            { image }
          </p>
          <p data-testid="product-detail-price">
            { price }
          </p>
          <p data-testid="product-detail-specs">
            { specs }
          </p>
        </div>
        <Link to="/cart" data-testid="shopping-cart-button">Cart</Link>
      </section>
    )
  }
}
