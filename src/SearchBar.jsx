import React, { Component } from 'react';

export default class SearchBar extends Component {
  render() {
    return (
      <label htmlFor="input-search-bar">
        <h3 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h3>
        <input
          type="text"
          id="input-search-bar"
        />
      </label>
    );
  }
}
