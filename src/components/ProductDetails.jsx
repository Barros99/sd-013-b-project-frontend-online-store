import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { getProductsFromCategoryAndQuery } from '../services/api';

class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = { product: {} };
    this.fetchProduct = this.fetchProduct.bind(this);
  }

  componentDidMount() {
    this.fetchProduct();
  }

  fetchProduct = async () => {
    const product = await getProductsFromCategoryAndQuery();
    this.setState({ product });
  }

  render() {
    const { product } = this.state;
    const { title, price, thumbnail, id } = product;
    return (
      <Link to={ `/product/${id}` }>
        <img alt="Product img" src={ thumbnail } />
        <h1>{ title }</h1>
        <p>{ price }</p>
      </Link>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default ProductDetails;
