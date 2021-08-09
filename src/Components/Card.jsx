import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const { title, price, thumbnail } = this.props;
    return (
      <div data-testid="product">
        <h1>{ title }</h1>
        <img src={ thumbnail } alt="" />
        <p>{ price }</p>
      </div>
    );
  }
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  thumbnail: PropTypes.string.isRequired,
};

export default Card;
