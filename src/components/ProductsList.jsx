import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ProductsList extends Component {
  initialMessage = () => (
    <p data-testid="home-initial-message">
      Digite algum termo de pesquisa ou escolha uma categoria.
    </p>
  );

  productsCards = (products) => {
    if (products.length === 0) {
      return <span>Nenhum produto foi encontrado</span>;
    }

    if (products === 'Carregando...') {
      return <span>{products}</span>;
    }

    return (
      products.map(({ id, title, thumbnail, price }) => (
        <div data-testid="product" key={ id } className="product-card">
          <h4>{title}</h4>
          <img src={ thumbnail } alt={ title } />
          <span>{`R$${price}`}</span>
        </div>
      ))
    );
  };

  render() {
    const { products } = this.props;
    return (
      <div>
        { products === 'noSearchAlready'
          ? this.initialMessage() : this.productsCards(products) }
      </div>
    );
  }
}

ProductsList.propTypes = ({
  products: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
  ]),
}).isRequired;
