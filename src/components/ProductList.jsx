import React from 'react';

class ProductList extends React.Component {
  render() {
    return (
      <label
        htmlFor="search"
        data-testid="home-initial-message"
      >
        Digite algum termo de pesquisa ou escolha uma categoria.
        <input
          type="text"
          id="search"
        />
      </label>
    );
  }
}

export default ProductList;
