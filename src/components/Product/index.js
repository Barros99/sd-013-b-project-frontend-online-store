import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// import './style.css';

class Product extends React.Component {
  saveProductToLocalStorage = () => {
    const { product } = this.props;

    localStorage.setItem('product-details', JSON.stringify(product));
  };

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
        <h2>{product.title}</h2>
        <img src={ product.thumbnail } alt={ `imagem de ${product.title}` } />
        <p>{product.price}</p>
        <Link
          data-testid="product-detail-link"
          to={ `/product/${product.id}` }
          onClick={ this.saveProductToLocalStorage }
        >
          Detalhes
        </Link>
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
