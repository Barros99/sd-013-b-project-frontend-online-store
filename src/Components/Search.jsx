import React from 'react';
import PropTypes from 'prop-types';

export default class Search extends React.Component {
  render() {
    const { product } = this.props;
    return (
      product.map(({ id, title, thumbnail, price }) => (
        <div data-testid="product" key={ id }>
          <div>
            <h2>{ title }</h2>
          </div>
          <img src={ thumbnail } alt={ title } />
          <h2>{ price }</h2>
        </div>
      ))
    );
  }
}

Search.propTypes = {
  product: PropTypes.objectOf(PropTypes.string),
}.isRequired;
