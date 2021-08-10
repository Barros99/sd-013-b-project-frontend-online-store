import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getProductsFromCategoryAndQuery } from '../services/api';

export default class ProductDetails extends Component {
  constructor() {
    super();

    this.state = {
      product: '',
    };

    this.handleState = this.handleState.bind(this);
  }

  async componentDidMount() {
    getProductsFromCategoryAndQuery();
    this.requestProductApi();
  }

  handleState(detail) {
    this.setState({ product: detail });
  }

  handleCartClick({ target }) {
    const shoppingCartList = JSON.parse(localStorage.getItem('productList'));
    shoppingCartList.push(target.name);
    localStorage.setItem('productList', JSON.stringify(shoppingCartList));
  }

  async requestProductApi() {
    const { match } = this.props;
    const url = `https://api.mercadolibre.com/items/${match.params.id}`;
    const requestProduct = await fetch(url);
    const resultProduct = await requestProduct.json();
    this.handleState(resultProduct);
  }

  render() {
    const { product } = this.state;
    if (!localStorage.getItem('productList')) localStorage.setItem('productList', '[]');
    return (
      <div>
        <h3 data-testid="product-detail-name">{ product.title }</h3>
        <img src={ product.thumbnail } alt={ product.title } />
        <ul>
          <li>
            R$
            { product.price }
          </li>
          <li>
            Disponíveis:
            { product.available_quantity }
          </li>
          <li>
            { product.warranty !== null ? product.warranty : 'Sem Garantia'}
          </li>
        </ul>
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={ this.handleCartClick }
          name={ JSON.stringify(product) }
        >
          Adcionar ao Carrinho
        </button>
        <Link to="/shoppingcart" data-testid="shopping-cart-button">
          Carrinho
        </Link>
      </div>
    );
  }
}

ProductDetails.defaultProps = {
  match: {},
};

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }),
};
