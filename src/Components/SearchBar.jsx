import React, { Component } from 'react';

// REQUISITO 2 FEITO POR TODOS VIA PAIR PROGRAMING;

export default class SearchBar extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      searchValue: '',
    };
  }

  handleChange({ target }) {
    const { onInputChange } = this.props;
    const { value } = target;
    this.setState({
      searchValue: value,
    });
    onInputChange(this.state);
  }

  render() {
    return (
      <label htmlFor="searchBar" data-testid="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
        <input
          data-testid="query-input"
          type="text"
          name="searchBar"
          onChange={ this.handleChange }
        />
      </label>
    );
  }
}
