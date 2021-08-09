import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      searchText: '',
      // searchResult: '',
    };
  }

  handleChange = ({ target }) => {
    this.setState({ searchText: target.value });
  }

  render() {
    const { searchText, searchResult } = this.state;
    return (
      <div>
        <input type="text" value={ searchText } onChange={ this.handleChange } />
        <p data-testid="home-initial-message">{ searchResult }</p>
      </div>
    );
  }
}
