import React from 'react';
import CategoryFilter from '../components/CategoryFilter';
import CartButton from '../components/CartButton';

class ProductList extends React.Component {
  render() {
    return (
      <div>
        <div>
          <CartButton />
          <CategoryFilter />
        </div>
        <div>
          <h4 data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </h4>
        </div>
      </div>
    );
  }
}

export default ProductList;
