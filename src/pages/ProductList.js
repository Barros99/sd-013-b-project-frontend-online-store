import React from 'react';
import CategoryFilter from '../components/CategoryFilter';

class ProductList extends React.Component {
  render() {
    return (
      <div>
        <h4 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h4>
        <CategoryFilter />
      </div>
    );
  }
}

export default ProductList;
