import React from 'react';
import PropTypes from 'prop-types';
// import FailResult from './FailResult';

export default class ProductList extends React.Component {
  render() {
    const { product } = this.props;
    const { title, thumbnail, price } = product;
    return (
      <div data-testid="product">
        <span>{ title }</span>
        <img src={ thumbnail } alt={ title } />
        <span>{ price }</span>
      </div>
    );
  }
}

ProductList.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};
