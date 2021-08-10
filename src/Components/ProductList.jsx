import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ProductList extends Component {
  render() {
    const { products, addToCart } = this.props;
    return (
      <div className="product-list">
        <ul>
          {products.map((product) => (
            <li data-testid="product" key={ product.id }>
              <span className="title-product">{ product.title }</span>
              <img
                src={ product.thumbnail }
                alt={ product.title }
                className="image-product"
              />
              <p className="price-product">
                R$
                {product.price}
              </p>
              <button
                type="button"
                data-testid="product-add-to-cart"
                onClick={ addToCart }
              >
                Adicionar ao Carrinho

              </button>
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
  addToCart: PropTypes.func.isRequired,
};
