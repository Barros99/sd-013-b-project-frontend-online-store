import React from 'react';
import CategoriesList from '../components/CategoriesList';
import ShoppingCartButton from '../components/ShoppingCartButton';

class ProductList extends React.Component {
  render() {
    return (
      <div className="main-container">
        <CategoriesList />
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
