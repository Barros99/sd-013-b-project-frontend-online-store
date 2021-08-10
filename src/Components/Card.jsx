import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Card extends React.Component {
  render() {
    const { title, price, thumbnail, id } = this.props;
    return (
      <div data-testid="product">
        <h1>{ title }</h1>
        <img src={ thumbnail } alt="" />
        <p>{ `R$: ${price}` }</p>
        <Link data-testid="product-detail-link" to={ `/${id}` }>Mais detalhes</Link>
      </div>
    );
  }
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  thumbnail: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Card;
