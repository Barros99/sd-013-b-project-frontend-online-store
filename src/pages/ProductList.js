import React from 'react';
import CartButton from '../components/CartButton';

class ProductList extends React.Component {
  render() {
    return (
      <div>
        <div>
          <CartButton />
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
