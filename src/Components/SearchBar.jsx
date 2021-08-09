import React, { Component } from 'react';

export default class SearchBar extends Component {
  render() {
    return (
      <div>
        <label htmlFor="home-initial-message" data-testid="home-initial-message">
          <input type="text" id="home-initial-message" />
          <br />
          Digite algum termo de pesquisa ou escolha uma categoria.
        </label>
      </div>
    );
  }
}
