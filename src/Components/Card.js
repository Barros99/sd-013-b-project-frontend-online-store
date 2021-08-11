import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Card extends Component {
  render() {
    const { id, title, image, price, freeShipping } = this.props;
    return (
      <Link
        to={ {
          pathname: `/${id}`,
          state: { modal: true, returnTo: this.props },
        } }
        data-testid="product-detail-link"
      >
        <div data-testid="product">
          <h2>{title}</h2>
          <img src={ image } alt={ title } width="200" />
          <h3>{price}</h3>
          {freeShipping ? <h4 data-testid="free-shipping">Frete Grátis</h4> : ''}
        </div>
      </Link>
    );
  }
}

Card.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  freeShipping: PropTypes.bool.isRequired,
};

export default Card;
