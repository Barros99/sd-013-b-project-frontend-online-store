import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ProductList extends Component {
  render() {
    const { products } = this.props;
    return (
      <div className="product-list">
        <ul>
          {products.map((product) => (
            <li data-testid="product" key={ product.id }>
              <span>{ product.title }</span>
              <img src={ product.thumbnail } alt={ product.title } />
              <p>
                R$
                {product.price}
              </p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  })).isRequired,
};
