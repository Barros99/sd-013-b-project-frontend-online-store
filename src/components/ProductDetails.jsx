import React from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/api';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  componentDidMount() {
    this.getProductDetails();
  }

  async getProductDetails() {
    const { match } = this.props;
    const { params } = match;
    console.log(params.id);

    const product = await api.getProduct(params.id);
    console.log(product);
  }

  render() {
    return (
      <div>
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
};

export default ProductDetails;
