import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/api';

export default class SearchButton extends Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  async handleClick() {
    const { onButtonClick } = this.props;
    const resultApi = await this.fetchProductsFromCategoryAndQuery();
    await onButtonClick(resultApi.results);
  }

  async fetchProductsFromCategoryAndQuery() {
    const { searchValueHome } = this.props;
    const response = await api
      .getProductsFromCategoryAndQuery('$CATEGORY_ID', searchValueHome);
    return response;
  }

  render() {
    return (
      <div>
        <button type="button" data-testid="query-button" onClick={ this.handleClick }>
          search
        </button>
      </div>
    );
  }
}

SearchButton.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
  searchValueHome: PropTypes.string.isRequired,
};
