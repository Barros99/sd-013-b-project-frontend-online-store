import React from 'react';
import '../styles/productCard.css';
import PropTypes from 'prop-types';

class ProductCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { product } = this.props;
    const { title, price, thumbnail } = product;
    return (
      <div data-testid="product" className="main-card-product">

        <p>{title}</p>
        <div className="image-card">
          <img src={ thumbnail } alt={ `Capa do ${title}` } />
        </div>
        <p>{price}</p>
      </div>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.string,
    thumbnail: PropTypes.string,
  }).isRequired,
};

export default ProductCard;
