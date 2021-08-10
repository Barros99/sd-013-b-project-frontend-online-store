import React from 'react';
import ShoppingCartButton from '../components/ShoppingCartButton';

class ProductList extends React.Component {
  render() {
    return (
      <div>
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
        <ShoppingCartButton />
      </div>

    );
  }
}

export default ProductList;
