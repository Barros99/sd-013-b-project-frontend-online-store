import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Fazer o loading...
export default class RenderCard extends Component {
  handleCartClick({ target }) {
    const shoppingCartList = JSON.parse(localStorage.getItem('productList'));
    shoppingCartList.push(target.name);
    localStorage.setItem('productList', JSON.stringify(shoppingCartList));
  }

  render() {
    const { products } = this.props;
    if (!localStorage.getItem('productList')) localStorage.setItem('productList', '[]');
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
            <button
              type="button"
              data-testid="product-add-to-cart"
              onClick={ this.handleCartClick }
              name={ JSON.stringify(product) }
            >
              Adcionar ao Carrinho
            </button>
          </div>
        )))}
      </div>
    );
  }
}

RenderCard.propTypes = {
  products: PropTypes.arrayOf().isRequired,
};
