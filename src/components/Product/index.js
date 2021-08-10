import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// import './style.css';

class Product extends React.Component {
  saveProductToLocalStorage = () => {
    const { product } = this.props;

    localStorage.setItem('product-details', JSON.stringify(product));
  };

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
