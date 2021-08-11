import React from 'react';
import PropTypes from 'prop-types';

export default class Product extends React.Component {
  render() {
    const { products, match: { params: { id: idParam } } } = this.props;
    const findedProduct = products.find(({ id: idProduct }) => idProduct === idParam);
    const { id, title, thumbnail, price } = findedProduct;
    return (
      <div data-testid="product" key={ id }>
        <div>
          <h2 data-testid="product-detail-name">{ title }</h2>
        </div>
        <img src={ thumbnail } alt={ title } />
        <h2>{`R$ ${price}`}</h2>
      </div>
    );
  }
}

Product.propTypes = {
  products: PropTypes.objectOf(PropTypes.string),
}.isRequired;
