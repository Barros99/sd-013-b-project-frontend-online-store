import React, { Component } from 'react';
// qimport * as api from '../services/api';

export default class SearchButton extends Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);

    this.state = {
      searchResult: [],
    };
  }

  componentDidMount() {
    this.fetchProductsFromCategoryAndQuery();
  }

  async handleClick() {
    await this.fetchProductsFromCategoryAndQuery();
    const { onButtonClick } = this.props;
    const { searchResult } = this.state;
    await onButtonClick(searchResult.results);
  }

  async fetchProductsFromCategoryAndQuery() {
    const { searchValueHome } = this.props;
    console.log(searchValueHome);
    const response = await (await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=$CATEGORY_ID&q=${searchValueHome}`)).json();
    // api.getProductsFromCategoryAndQuery('$CATEGORY_ID', searchValueHome);
    this.setState({
      searchResult: response,
    });
    // return response;
  }

  render() {
    // const { searchValueHome } = this.props;
    return (
      <div>
        <button type="button" data-testid="query-button" onClick={ this.handleClick }>
          search
        </button>
      </div>
    );
  }
}
