import React from 'react';

export default class ProductList extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="search" data-testid="home-initial-message">
          <input type="text" name="search" id="search" />
          Digite algum termo de pesquisa ou escolha uma categoria.
        </label>
      </div>
    );
  }
}
