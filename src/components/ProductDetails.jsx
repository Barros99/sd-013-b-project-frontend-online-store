import React from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/api';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);

    const { location: { state } } = this.props;
    this.state = {

    };
  }

  componentDidMount() {
    this.getProductDetails();
  }

  async getProductDetails() {
    const { match } = this.props;
    const { params } = match;

    const product = await api.getProductsFromCategoryAndQuery(params.id);
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
