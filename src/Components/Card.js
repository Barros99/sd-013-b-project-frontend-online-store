import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Card extends Component {
  render() {
    const { id, title, image, price } = this.props;
    return (
      <Link
        to={ {
          pathname: `/${id}`,
          state: { modal: true, returnTo: this.props },
        } }
        data-testid="product-detail-link"
      >
        {/* { console.log(this.props)} */}
        <div data-testid="product">
          <h2>{title}</h2>
          <img src={ image } alt={ title } width="200" />
          <h3>{price}</h3>
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
};

export default Card;
