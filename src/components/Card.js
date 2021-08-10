import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const p = this.props;
    return (
      <div data-testid="product">
        <div>
          <img src={ p.thumbnail } alt="product" />
        </div>
        <div>
          { p.title }
        </div>
        <div>
          { p.price }
        </div>
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
