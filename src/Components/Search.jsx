import React from 'react';
import PropTypes from 'prop-types';

export default class ProductList extends React.Component {
  componentDidMount() {
  }

  render() {
    const { product } = this.props;
    console.log(product);
    return (
      product.map((item) => (
        <div data-testid="product" key={ item.id }>
          <div>
            <h2>{ item.title }</h2>
          </div>
          <img src={ item.thumbnail } alt={ item.title } />
          <h2>{ item.price }</h2>
        </div>
      ))
    );
  }
}

ProductList.propTypes = {
  product: PropTypes.objectOf(PropTypes.string),
}.isRequired;
