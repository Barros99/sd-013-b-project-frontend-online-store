import React from 'react';
import PropTypes from 'prop-types';

import { getProductsFromCategoryAndQuery } from '../services/api';

export default class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
    const result = await getProductsFromCategoryAndQuery(category, id);
    this.setState({
      searchResult: result.results[0],
    });
    console.log(result);
  }

  render() {
    const { searchResult } = this.state;
    return (
      <div data-testid="product-detail-name">{searchResult.title}</div>
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
