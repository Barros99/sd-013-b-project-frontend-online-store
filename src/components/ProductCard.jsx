import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css';
import PropTypes from 'prop-types';

class ProductCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { product } = this.props;
    const { title, price, thumbnail, id } = product;
    return (
      <Link
        to={ {
          pathname: `/details/${id}`,
          state: product,
        } }
        data-testid="product-detail-link"
      >
        <div
          data-testid="product"
          className="main-card-product"
        >
          <p>{title}</p>
          <div className="image-card">
            <img src={ thumbnail } alt={ `Capa do ${title}` } />
          </div>
          <p>{price}</p>
        </div>
      </Link>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.string,
    thumbnail: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
};

export default ProductCard;
