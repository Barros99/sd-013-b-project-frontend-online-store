import React from 'react';
import PropTypes from 'prop-types';

export default class CardRender extends React.Component {
  render() {
    const { results } = this.props;
    const { title, price, thumbnail } = results;
    return (
      <div>
        <img alt="imagem" src={ thumbnail } data-testid="product" />
        <div>
          <h4>{ title }</h4>
          <p>{ price }</p>
        </div>
      </div>
    );
  }
}

CardRender.propTypes = {
  results: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
    thumbnail: PropTypes.string,
  }).isRequired,
};
