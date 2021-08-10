import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Card extends React.Component {
  render() {
    const { product } = this.props;
    const { title, price, thumbnail } = product;

    return (
      <Link
        to={ { pathname: '/product-details', product } }
        data-testid="product-detail-link"
      >
        <div data-testid="product">
          <div>
            <img src={ thumbnail } alt="product" />
          </div>
          <div>
            { title }
          </div>
          <div>
            { price }
          </div>
        </div>
      </Link>
    );
  }
}

Card.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
    thumbnail: PropTypes.string,
  }).isRequired,
};

export default Card;
