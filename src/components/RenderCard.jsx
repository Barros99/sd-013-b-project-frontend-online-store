import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Fazer o loading...
export default class RenderCard extends Component {
  render() {
    const { products } = this.props;
    return (
      <div>
        {products.map(((product) => (
          <div key={ product.id } data-testid="product">
            <h3>{product.title}</h3>
            <img src={ product.thumbnail } alt="" />
            <p>{product.price}</p>
          </div>
        )))}
      </div>
    );
  }
}

RenderCard.propTypes = {
  products: PropTypes.arrayOf().isRequired,
};
