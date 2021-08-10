import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Itens extends Component {
  render() {
    const { item: { title, thumbnail, price } } = this.props;
    return (
      <div className="item">
        <div className="divImg">
          <img
            src={ thumbnail }
            alt={ `Imagem do item ${title}` }
            style={ { width: '150px' } }
          />
        </div>
        <p>{ title }</p>
        <hr />
        <p>
          PRICE:
          { price }
        </p>
      </div>
    );
  }
}

Itens.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.string,
  }).isRequired,
};
