import React, { Component } from 'react';

export default class ProductList extends Component {
  render() {
    return (
      <div>
        <form>
          <label htmlFor="pesquisar">
            <input type="text" name="pesquisar" id="pesquisar" />
          </label>
        </form>
        <h3 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h3>
      </div>
    );
  }
}
