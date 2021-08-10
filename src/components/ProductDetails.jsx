import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { getProductsFromCategoryAndQuery as ApiProduct } from '../services/api';

class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
      loading: true,
    };
  }

  componentDidMount() {
    this.getProduct();
  }

  getProduct = async () => {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    const requestProduct = await ApiProduct('', '', id);
    this.setState({
      product: requestProduct,
      loading: false,
    });
  }

  render() {
    const { product, loading } = this.state;
    const { title, price, thumbnail } = product;
    if (loading) {
      return <p>Carregando</p>;
    }
    console.log(title);
    return (
      <div>
        <img alt={ title } src={ thumbnail } />
        <h1
          data-testid="product-detail-name"
        >
          { title }
        </h1>
        <p>{ price }</p>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default ProductDetails;
