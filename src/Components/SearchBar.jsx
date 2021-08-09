import React, { Component } from 'react';

// REQUISITO 2 FEITO POR TODOS VIA PAIR PROGRAMING;

export default class SearchBar extends Component {
  render() {
    return (
      <label htmlFor="searchBar" data-testid="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
        <input
          type="text"
          name="searchBar"
        />
      </label>
    );
  }
}
