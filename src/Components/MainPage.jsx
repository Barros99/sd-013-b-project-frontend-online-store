import React, { Component } from 'react';

export default class MainPage extends Component {
  render() {
    return (
      <div>
        <label htmlFor="input-search" data-testid="home-initial-message">
          <input type="text" value="" id="input-search" />
          Digite algum termo de pesquisa ou escolha uma categoria.
        </label>
      </div>
    );
  }
}
