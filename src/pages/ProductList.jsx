import React from 'react';
import ShoppingCartButton from '../components/ShoppingCartButton';

class ProductList extends React.Component {
  render() {
    return (
      <div>
        <section>
          <input type="text" />
          <ShoppingCartButton />
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
        </section>
      </div>
    );
  }
}

export default ProductList;
