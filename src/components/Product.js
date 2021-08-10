import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component {
  getItemsFromLocalStorage = () => {
    const items = localStorage.getItem('cartItems');
    if (items) {
      return JSON.parse(items);
    }
    return [];
  }

  handleClick = () => {
    const { product } = this.props;
    const items = this.getItemsFromLocalStorage();
    const newItems = [...items, { ...product, amount: 1 }];
    localStorage.setItem('cartItems', JSON.stringify(newItems));
  }

  render() {
    const { product } = this.props;

    return (
      <div data-testid="product" key={ product.id }>
        <h2>{ product.title }</h2>
        <img src={ product.thumbnail } alt={ `imagem de ${product.title}` } />
        <p>{ product.price }</p>
        <button
          type="button"
          data-testid="product-add-to-cart"
          onClick={ this.handleClick }
        >
          Adcionar ao Carrinho
        </button>
      </div>
    );
  }
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default Product;
