import React from 'react';
import PropTypes from 'prop-types';

class Products extends React.Component {
  render() {
    const { products, title, price, thumbnail } = this.props;

    if (products.length === 0) {
      return <span> Nenhum produto foi encontrado; </span>;
    }
    return (
      <div>
        { products.map(() => (
          <div data-testid="product" key={ title }>
            <h1>{title}</h1>
            <img src={ thumbnail } alt={ title } />
            <span>{price}</span>
          </div>
        ))}
      </div>
    );
  }
}

Products.propTypes = {
  products: PropTypes.array,
}.isRequired;

export default Products;
