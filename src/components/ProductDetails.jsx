import React from 'react';
import PropTypes from 'prop-types';

import { getProductsFromCategoryAndQuery } from '../services/api';
import DetailedProduct from './DetailedProduct';

export default class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      category: '',
      searchResult: [],
    };
    this.handleRequisitionById = this.handleRequisitionById.bind(this);
  }

  componentDidMount() {
    this.handleRequisitionById();
  }

  async handleRequisitionById() {
    const { match: { params: { id } } } = this.props;
    const { category } = this.state;
    this.setState({ loading: true }, async () => {
      const result = await getProductsFromCategoryAndQuery(category, id);
      this.setState({
        loading: false,
        searchResult: result.results[0],
      });
    });
  }

  render() {
    const { searchResult, loading } = this.state;
    const displayLoading = <span>Loading...</span>;
    return (
      <div data-testid="product-detail-name">
        {loading ? displayLoading : <DetailedProduct item={ searchResult } />}
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
