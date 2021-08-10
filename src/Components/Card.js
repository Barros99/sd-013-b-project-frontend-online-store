import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
  render() {
    const { title, image, price } = this.props;
    return (
      <div data-testid="product">
        <h2>{title}</h2>
        <img src={ image } alt={ title } width="200" />
        <h3>{price}</h3>
      </div>
    );
  }
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default Card;
