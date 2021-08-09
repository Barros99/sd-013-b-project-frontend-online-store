import React from 'react';

class ProductList extends React.Component {
  render() {
    return (
      <div>
        <section>
          <input type="text" />
          <h1 data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </h1>
        </section>
      </div>
    );
  }
}

export default ProductList;
