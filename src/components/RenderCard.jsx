import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Fazer o loading...
export default class RenderCard extends Component {
  render() {
    const { products } = this.props;
    return (
      <div>
        {products.map(((product) => (
          <div key={ product.id } data-testid="product">
            <Link
              to={ `/details/${product.id}` }
              data-testid="product-detail-link"
            >
              <h3>{product.title}</h3>
              <img src={ product.thumbnail } alt="" />
              <p>{product.price}</p>
            </Link>
          </div>
        )))}
      </div>
    );
  }
}

RenderCard.propTypes = {
  products: PropTypes.arrayOf().isRequired,
};
