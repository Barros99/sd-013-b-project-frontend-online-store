import React from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/api';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);

    const { location: { state } } = this.props;
    this.state = {
      productCategoryId: state.category_id,
      productName: state.name,
    };
  }

  componentDidMount() {
    this.getProductDetails();
  }

  async getProductDetails() {
    const { productCategoryId, productName } = this.state;

    const product = await api
      .getProductsFromCategoryAndQuery(productCategoryId, productName);
    console.log(product);
  }

  render() {
    return (
      <div data-testid="product-detail-name">
        Ola
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,

  location: PropTypes.shape({
    state: PropTypes.shape({
      category_id: PropTypes.string,
      name: PropTypes.string,
    }),
  }).isRequired,
};

export default ProductDetails;
