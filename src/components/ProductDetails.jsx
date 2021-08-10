import React, { Component } from 'react';
import PropTypes from 'prop-types';
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

  async requestProductApi() {
    const { match } = this.props;
    const url = `https://api.mercadolibre.com/items/${match.params.id}`;
    const requestProduct = await fetch(url);
    const resultProduct = await requestProduct.json();
    this.handleState(resultProduct);
  }

  render() {
    const { product } = this.state;
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
